function myFunc<T>(input: T): T {
  return input;
}

const result = myFunc({
  name: "Sid",
});

const resultTwo = myFunc(["Sid"]);
