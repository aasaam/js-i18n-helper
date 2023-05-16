export function getIdentifier(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
