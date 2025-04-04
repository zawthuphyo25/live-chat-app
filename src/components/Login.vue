<template>
  <h2>Log In</h2>
  <form @submit.prevent="logIn">
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    let logIn = async () => {
      console.log(email.value, password.value);
    };

    return {
      email,
      password,
      logIn,
    };
  },
};
</script>

<style></style>
