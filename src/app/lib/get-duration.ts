export function getDuration(start: Date, end: Date = new Date()) {
  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1 // 👈 LinkedIn counts the start month

  if (totalMonths < 0) totalMonths = 0

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts = []
  if (years) parts.push(`${years} ${years > 1 ? 'yrs' : 'yr'}`)
  if (months) parts.push(`${months} ${months > 1 ? 'mos' : 'mo'}`)

  return parts.join(' ')
}
