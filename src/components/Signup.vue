<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Username" required v-model="displayName" />
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  setup(props, context) {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    let { error, createAccount } = useSignup();
    let signUp = async () => {
      // console.log(displayName.value, email.value, password.value);
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        // console.log(res.user);
        context.emit("enterChatroom");
      }
    };

    return {
      displayName,
      email,
      password,
      signUp,
      error,
    };
  },
};
</script>

<style></style>
