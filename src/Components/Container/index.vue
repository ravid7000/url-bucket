<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style scoped>
.container {
  position: relative;
  height: 100%;
  max-width: var(--container-width);
  padding: var(--spacing);
  margin-left: auto;
  margin-right: auto;
}
</style>
