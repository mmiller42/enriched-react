export function add(numbers: readonly number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0);
}
