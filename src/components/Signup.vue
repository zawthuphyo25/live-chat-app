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
import useSignup from "../composables/useSignup";

export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    let { error, createAccount } = useSignup();
    let signUp = async () => {
      // console.log(displayName.value, email.value, password.value);
      let res = await createAccount(
        displayName.value,
        email.value,
        password.value
      );
      console.log(res.user);
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
