// whatever is in the angle brackets changes the type that it is
// this is an array of numbers
type numArray = Array<number>;

//this is an array of strings
type arr = Array<string>;

// could also use (arr: Array<number>)
const last = <T,>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

//you can say specifically what the type is coming
const l2 = last<string>(["a", "b", "c"]);

//you can set a default type
const makeArr = <X, Y = any>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("a", "b");

//now doesn't require a type for the second argument
const v3 = makeArr<string | null>("a", 5);

//how do we allow to call with at least first name and last name?
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const v4 = makeFullName({ firstName: "sid", lastName: "quinsaat", age: 15 });
// const v5 = makeFullName({firstName})
