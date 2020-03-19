export function randomId(to = 6) {
  return Math.random()
    .toString(36)
    .substring(to);
}
