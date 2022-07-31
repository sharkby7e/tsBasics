interface MyInterface {
  property1: string;
  property2: number;
  property3: boolean;
}

const obj: Partial<MyInterface> = {
  property2: 3,
};

const objTwo: Omit<MyInterface, "property3" | "property2"> = {
  property1: "sup",
};
