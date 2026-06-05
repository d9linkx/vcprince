export function getDynamicDate(baseDateStr: string): Date {
  // Parsing YYYY-MM-DD
  const [year, month, day] = baseDateStr.split('-').map(Number);
  const baseMidnight = new Date(year, month - 1, day);
  
  const now = new Date();
  const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  while (nowMidnight > baseMidnight) {
    baseMidnight.setDate(baseMidnight.getDate() + 7);
  }
  return baseMidnight;
}

export function getFridayDate(): Date {
  return getDynamicDate("2026-06-12");
}

export function getSaturdayDate(): Date {
  return getDynamicDate("2026-06-13");
}

export function formatLongDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

export function formatMediumDate(date: Date, isShort = false): string {
  const weekday = date.toLocaleDateString('en-US', { weekday: isShort ? 'short' : 'long' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.getDate();
  return `${weekday}, ${month} ${day}`;
}

export function getCohortRangeString(): string {
  const fri = getFridayDate();
  const sat = getSaturdayDate();
  
  const friMonth = fri.toLocaleDateString('en-US', { month: 'long' });
  const satMonth = sat.toLocaleDateString('en-US', { month: 'long' });
  
  if (friMonth === satMonth) {
    return `${friMonth} ${fri.getDate()} & ${sat.getDate()}, ${fri.getFullYear()}`;
  } else {
    const friMonthShort = fri.toLocaleDateString('en-US', { month: 'short' });
    const satMonthShort = sat.toLocaleDateString('en-US', { month: 'short' });
    return `${friMonthShort} ${fri.getDate()} & ${satMonthShort} ${sat.getDate()}, ${fri.getFullYear()}`;
  }
}

export function getCohortMonthYearString(): string {
  const fri = getFridayDate();
  const month = fri.toLocaleDateString('en-US', { month: 'long' });
  return `${month} ${fri.getFullYear()}`;
}
