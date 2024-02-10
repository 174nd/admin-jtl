
export function randomNumber(data: {min: number, max: number}) : number {
  return Math.floor(Math.random() * (data.max - data.min + 1)) + data.min;
}

export function randomNumberArray(data: {length: number, min: number, max: number}): number[] {
  return Array.from({ length: data.length }, () => Math.floor(Math.random() * (data.max - data.min + 1)) + data.min);
}