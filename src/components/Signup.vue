<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Username" required v-model="displayName" />
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { auth } from "../firebase/config";

export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    let error = ref(null);
    let signUp = async () => {
      // console.log(displayName.value, email.value, password.value);
      try {
        let res = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );

        if (!res) {
          throw new Error("Could not create new user");
        }
        res.user.updateProfile({
          displayName: displayName.value,
        });
        console.log(res.user);
      } catch (err) {
        // console.log(err.message);
        error.value = err.message;
        console.log(error.value);
      }
    };

    return {
      displayName,
      email,
      password,
      signUp,
    };
  },
};
</script>

<style></style>
