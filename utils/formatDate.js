export function formatDate(date) {
  const yyyy = String(date.getFullYear());
  const M = String(date.getMonth() + 1);
  const d = String(date.getDate());
  const formattedDate = `${yyyy}. ${M}. ${d}`;

  return formattedDate;
}
