export function getKda(k, a, d, f = 2) {
  return ((k + a) / d).toFixed(f);
}

export function getWinRatio(a, w, r = 100) {
  return Math.ceil((w / a) * r);
}