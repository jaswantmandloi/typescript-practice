import { pass2DataVariants } from "./generics/generics";
import { addUser } from "./unionInterface/unionInterfaces";
import { Users } from "./unionInterface/unionInterfacesType";

let users: Users = addUser({ name: "Jm", id: 1 });
users = addUser({ name: "Jm", id: 1 });

console.log({ users });

const length: number = pass2DataVariants([]);
console.log({ length });
