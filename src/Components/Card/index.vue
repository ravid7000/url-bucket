<template>
  <div class="card">
    <h3 v-if="$slots.heading" class="card-heading">
      <slot name="heading"></slot>
    </h3>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.card {
  position: relative;
  padding: var(--card-spacing-y) var(--spacing);
  background-color: var(--card-bg);
  border: solid 1px var(--border-color);
  margin-bottom: var(--card-spacing-y);
  border-radius: 4px;
}

.card-heading {
  font-size: 1rem;
  font-weight: 700;
}

.card-body {
  margin-top: 0px;
}
</style>
