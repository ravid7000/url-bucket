<template>
  <input v-bind:class="{ fullWidth: fullWidth }" v-on="$listeners" />
</template>

<script>
export default {
  name: "Input",
  props: {
    fullWidth: {
      default: true,
      type: Boolean
    }
  }
};
</script>

<style scoped>
input {
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  height: var(--input-height);
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-color);
}

input:focus {
  border-color: var(--primary);
  outline: none;
}

.fullWidth {
  width: 100%;
  display: block;
}
</style>
