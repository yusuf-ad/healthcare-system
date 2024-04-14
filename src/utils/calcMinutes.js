export function calcMinutes(time) {
  const parts = time.split(":");
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);

  const totalMinutes = hours * 60 + minutes;

  return totalMinutes;
}
