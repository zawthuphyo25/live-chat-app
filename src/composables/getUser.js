import { auth } from "@/firebase/config";
import { ref } from "vue";

let user = ref(auth.currentUser);

// console.log(auth.currentUser);
auth.onAuthStateChanged((_user) => {
  console.log("User state changed", _user);
  user.value = _user;
});
// console.log("User state changed", user.value);

let getUser = () => {
  return { user };
};

export default getUser;
