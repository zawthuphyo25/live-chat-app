<template>
  <h2>Log In</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    let email = ref("");
    let password = ref("");

    let { error, signIn } = useLogin();

    let login = async () => {
      // console.log(email.value, password.value);
      let res = await signIn(email.value, password.value);
      if (res) {
        console.log(res.user);
      } else {
        error.value = "Invalid email or password";
      }
    };

    return {
      email,
      password,
      login,
      error,
    };
  },
};
</script>

<style></style>
