<template>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: "IconBase"
};
</script>

<style>
.icon {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
</style>
