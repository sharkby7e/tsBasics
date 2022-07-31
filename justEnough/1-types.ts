// interface MyInterface {
//   property1?: string;
//   property2: number;
//   property3: boolean;
// }
//
// interface MyInterfaceThree {
//   property5?: boolean;
// }
//
// interface MyInterfaceTwo extends MyInterface, MyInterfaceThree {
//   property4: string;
// }
//
//
type MyType = {
  propert1: string;
};

enum MyEnum {
  enumOne = "enumOne",
  enumTwo = "enumTwo",
}

export type MyTypePoo = {
  propert2: boolean;
  propert3: MyEnum;
} & MyType;

async function myFunction(input: MyTypePoo): Promise<MyTypePoo> {
  return input;
}

myFunction({
  propert1: "hello",
  propert2: true,
  propert3: MyEnum.enumOne,
});

Object.keys(MyEnum);
Object.values(MyEnum);
