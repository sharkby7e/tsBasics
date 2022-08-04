export const introduceMyself = (first: string): string => `Hello ${first}`;

export class Set {
  list = [];
  isEmpty = function (): boolean {
    return this.list.length === 0;
  };
  add = function (string: string): void {
    this.list.push(string);
  };
  contains = function (string: string): boolean {
    return this.list.includes(string);
  };
  remove = function (string: string): void {
    this.list.splice(this.list.indexOf(string), 1);
  };
}
