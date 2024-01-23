export const add = (...num: number[]): number =>
  num.reduce((el, acc) => (acc += el), 0);
