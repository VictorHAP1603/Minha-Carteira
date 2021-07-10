export function dateFormat(date: string) {
  return new Intl.DateTimeFormat("pr-BR").format(new Date(`${date}`));
}
  