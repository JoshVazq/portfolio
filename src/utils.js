import { Period } from 'model/period';

type WithDates = {
  dates: Period
};
export function sortByFrom(a: WithDates, b: WithDates, asc: number) {
  return asc * (a.dates.from.getTime() - b.dates.from.getTime());
}
export function sortByFromAsc(a: WithDates, b: WithDates) {
  return sortByFrom(a, b, 1);
}
export function sortByFromDesc(a: WithDates, b: WithDates) {
  return sortByFrom(a, b, -1);
}
