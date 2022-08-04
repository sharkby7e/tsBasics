export const introduceMyself = (name: string): string => `Hello ${name}`;

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

export const SetFactory = () => {
  return {
    list: [],
    isEmpty: function () {
      this.list.length === 0;
    },
    add: function (string: string): void {
      this.list.push(string);
    },
    contains: function (string: string): boolean {
      return this.list.includes(string);
    },
    remove: function (string: string): void {
      this.list.splice(this.list.indexOf(string), 1);
    },
  };
};
