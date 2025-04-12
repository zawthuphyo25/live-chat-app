<template>
  <div class="chat-window">
    <div class="messages">
      <div class="singal">
        <span class="created-at">3min ago</span>
        <span class="name">Zaw Zaw</span>
        <span class="message">Hello, how can I help you?</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
