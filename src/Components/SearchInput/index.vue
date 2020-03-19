<template>
  <span
    class="input-wrapper"
    v-bind:class="{ fullWidth: fullWidth, withIcon: $slots.icon }"
  >
    <input
      :placeholder="placeholder"
      v-bind:class="{ fullWidth: fullWidth, withIcon: $slots.icon }"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <div class="input-icon">
      <SearchIcon />
    </div>
  </span>
</template>

<script>
import SearchIcon from "../Icons/SearchIcon";
export default {
  name: "SearchInput",
  components: {
    SearchIcon
  },
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

input {
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  height: var(--input-height);
  padding-left: 2.2rem;
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
