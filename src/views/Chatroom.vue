<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
</template>

<script>
import { watch } from "vue";
import Navbar from "../components/Navbar";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  components: { Navbar },
  setup() {
    let { user } = getUser();
    let router = useRouter();

    watch(user, () => {
      // console.log(user.value);
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style></style>
