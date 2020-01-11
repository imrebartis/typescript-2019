import { User } from "./models/User";

const user = new User({ name: "ho", age: 3 });

console.log(user.get('name'));
console.log(user.get('age'));
