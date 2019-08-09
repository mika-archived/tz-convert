import { timezones } from "./data";

export function ianaToWindows(timezone: string): string | undefined {
  const tz = timezones.find(w => w.i.some(v => v.type.includes(timezone)));
  return tz ? tz.w : undefined;
}

export function windowsToIana(timezone: string, territory: string = "001"): string | undefined {
  const tz = timezones.find(w => w.w === timezone);
  if (!tz) return undefined;
  if (!tz) return undefined;

  const zone = tz.i.find(w => w.territory == territory);
  return zone ? zone.type[0] : undefined;
}
