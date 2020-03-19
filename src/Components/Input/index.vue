<template>
  <input
    v-bind:class="{ fullWidth: fullWidth, withIcon: $slots.icon }"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    fullWidth: {
      default: true,
      type: Boolean
    },
    value: String
  }
};
</script>

<style scoped>
input {
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  height: var(--element-height);
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
