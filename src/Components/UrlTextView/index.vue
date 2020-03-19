<template>
  <div
    class="url-text-view"
    :placeholder="placeholder"
    v-bind:class="{ fullWidth: fullWidth, withIcon: $slots.icon }"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "UrlTextView",
  props: {
    fullWidth: {
      default: true,
      type: Boolean
    },
    placeholder: String,
    value: String
  }
};
</script>

<style scoped>
.input-wrapper {
  position: relative;
  margin-top: 20px;
}

.input-icon {
  position: absolute;
  left: 0.8rem;
  top: 0.4rem;
  z-index: 1;
  user-select: none;
}

.url-text-view {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  min-height: 10px;
  resize: none;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-color);
  word-break: break-all;
}

.fullWidth {
  width: 100%;
  display: block;
}
</style>
