<template>
  <Card>
    <template v-slot:heading>
      <a>{{ title }}</a>
    </template>
    <div class="subtext">
      <span>{{ items | pluralize }}</span>
      <span class="dot" />
      <span>Created on {{ createdAt }}</span>
    </div>
    <div class="footer">
      <Button title="Add current tab to bucket" @click="$emit('onAdd', id)">
        <AddIcon />
      </Button>
      <Button title="Open all urls in new tabs" @click="$emit('onNewTab', id)">
        <TabIcon />
      </Button>
      <Button
        title="Open all urls in new window"
        @click="$emit('onNewWindow', id)"
      >
        <WindowIcon />
      </Button>
      <Button
        title="Open all urls in new incognito window"
        @click="$emit('onNewIncognitoWindow', id)"
      >
        <IncognitoIcon />
      </Button>
      <Button title="Delete bucket" @click="askDelete = true">
        <DeleteIcon />
      </Button>
    </div>
    <div v-if="askDelete" class="delete-confirm">
      <Button @click="$emit('onDelete', id)">Delete</Button>
      <Button @click="askDelete = false">Cancel</Button>
    </div>
  </Card>
</template>

<script>
import Card from "../Card";
import Button from "../Button";
import AddIcon from "../Icons/AddIcon";
import TabIcon from "../Icons/TabIcon";
import WindowIcon from "../Icons/WindowIcon";
import IncognitoIcon from "../Icons/IncognitoIcon";
import DeleteIcon from "../Icons/DeleteIcon";
export default {
  name: "Bucket",
  components: {
    Card,
    Button,
    AddIcon,
    TabIcon,
    WindowIcon,
    IncognitoIcon,
    DeleteIcon
  },
  filters: {
    pluralize: val => {
      const items = parseInt(val, 10);
      if (items > 1) {
        return `${items} items`;
      }
      return `${items} item`;
    }
  },
  data() {
    return {
      askDelete: false
    };
  },
  props: {
    id: [String, Number],
    type: String,
    title: {
      type: String,
      default: "Cleartrip"
    },
    items: {
      default: 0
    },
    created: {
      type: Number,
      default: 1584453404852
    },
    selected: {
      type: Boolean,
      default: false
    },
    onAdd: Function,
    onNewTab: Function,
    onNewWindow: Function,
    onNewIncognitoWindow: Function,
    onDelete: Function
  },
  methods: {
    handleDeleteProcced: function() {
      this.$emit("onDelete", this.id);
    }
  },
  computed: {
    createdAt: function() {
      const val = this.created;
      if (typeof val !== "number") {
        return "";
      }
      const date = new Date(val);
      return date.toDateString().substr(3);
    }
  }
};
</script>

<style scoped>
.subtext {
  color: var(--sub-text-color);
  font-size: 0.8rem;
}

.dot {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  vertical-align: middle;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background-color: var(--sub-text-color);
}

.footer {
  margin-top: var(--spacing);
}

.delete-confirm {
  position: absolute;
  left: 1px;
  top: 1px;
  right: 1px;
  bottom: 1px;
  z-index: 10;
  background-color: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
