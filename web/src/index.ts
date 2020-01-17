import { User } from "./models/User";

const user = new User({ name: "ho", age: 3 });

user.on("change", () => {
  console.log("change #1");
});
user.on("change", () => {
  console.log("change #2");
});
user.on("keyup", () => {
  console.log("keyup was triggered");
});

user.trigger("bl");
