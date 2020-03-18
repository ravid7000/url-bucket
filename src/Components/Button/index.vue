<template>
  <button v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style scoped>
button {
  background-color: var(--button-bg);
  border: 1px solid var(--border-color);
  height: var(--element-height);
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
}

button + button {
  margin-left: 10px;
}
</style>
