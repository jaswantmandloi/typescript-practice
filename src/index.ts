import { addUser, pass2DataVariants } from "./unionInterfaces";
import { Users } from "./unionInterfacesType";

let users: Users = addUser({ name: "Jm", id: 1 });
users = addUser({ name: "Jm", id: 1 });

console.log({ users });

const length: number = pass2DataVariants([]);
console.log({ length });
