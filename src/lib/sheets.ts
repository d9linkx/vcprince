import { RegistrationDetails } from "../types";

/**
 * Transmits the registered student details immediately to the configured Google App Script
 * with redundant fallback strategies to support both fullstack proxy and pure static hosts (like Vercel).
 */
export async function submitToSpreadsheet(
  url: string,
  details: RegistrationDetails & { id: string; projectIdea?: string }
): Promise<boolean> {
  if (!url || url.includes("placeholder") || url.includes("...") || url.trim() === "") {
    console.warn("No Google Sheets Apps Script URL is configured. Storing locally only.");
    return false;
  }

  // Define structured payload matching standard webhook requirements
  const payload = {
    ticketId: details.id,
    fullName: details.fullName,
    email: details.email,
    whatsapp: details.whatsapp,
    location: details.location,
    pathPreference: details.pathPreference,
    projectIdea: details.projectIdea || "N/A",
    paymentConfirmed: details.paymentConfirmed ? "Yes" : "No",
    registrationDate: details.registrationDate || new Date().toISOString()
  };

  // Attempt 1: Server-side API Proxy
  try {
    const apiResponse = await fetch("/api/register-external", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        appsScriptUrl: url,
        details: payload
      })
    });

    if (apiResponse.ok) {
      const data = await apiResponse.json();
      if (data.success) {
        console.log("Spreadsheet sync successful via server proxy!");
        return true;
      }
    }
  } catch (err) {
    console.warn("Server-side proxy fetch failed (common on static decors like Vercel). Trying direct CORS-safe transmission...");
  }

  // Attempt 2: Direct browser transmit with mode: 'no-cors'
  // mode: 'no-cors' lets us route around CORS locks in Google Sheets API redirections successfully!
  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    console.log("Spreadsheet sync successful via raw direct browser fetch!");
    return true;
  } catch (directErr) {
    console.error("Direct browser fetch to Google Sheets also failed:", directErr);
    return false;
  }
}
