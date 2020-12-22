export function getRandInt(min, max) {
  return Math.floor(min - (min - max -1) * Math.random());
}