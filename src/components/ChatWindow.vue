<template>
  <div class="chat-window">
    <div class="messages" v-for="message in messages" :key="message.id">
      <div class="singal">
        <span class="created-at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { ref } from "vue";

export default {
  setup() {
    let messages = ref([]);
    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        // console.log(snap);
        let results = [];
        snap.docs.forEach((doc) => {
          //   console.log(doc.data());
          let document = {
            id: doc.id,
            ...doc.data(),
          };
          //   console.log(document);
          results.push(document);
          //   console.log(results);
        });
        messages.value = results;
        console.log(messages.value);
      });
    return {
      messages,
    };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
