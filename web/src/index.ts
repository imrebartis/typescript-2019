import { User } from "./models/User";

const user = new User({ name: "ho", age: 3 });

user.on("change", () => {});
user.on("change", () => {});
user.on("keyup", () => {});

console.log(user);
