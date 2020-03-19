<template>
  <Card>
    <template v-slot:heading>
      <a>{{ title }}</a>
    </template>
    <div class="subtext">
      <span>Created on {{ createdAt }}</span>
    </div>
    <UrlTextView class="mt-5" :value="url" readonly />
    <div class="footer">
      <Button title="Open in new tabs" @click="$emit('onNewTab', id)">
        <TabIcon />
      </Button>
      <Button title="Open in new window" @click="$emit('onNewWindow', id)">
        <WindowIcon />
      </Button>
      <Button
        title="Open in new incognito window"
        @click="$emit('onNewIncognitoWindow', id)"
      >
        <IncognitoIcon />
      </Button>
      <Button title="Delete Url" @click="askDelete = true">
        <DeleteIcon />
      </Button>
    </div>
    <div v-if="askDelete" class="delete-confirm">
      <Button @click="$emit('onDelete', id)" variant="danger">Delete</Button>
      <Button @click="askDelete = false">Cancel</Button>
    </div>
  </Card>
</template>

<script>
import Card from "../Card";
import Button from "../Button";
import TabIcon from "../Icons/TabIcon";
import WindowIcon from "../Icons/WindowIcon";
import IncognitoIcon from "../Icons/IncognitoIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import UrlTextView from "../UrlTextView";
export default {
  name: "BucketUrl",
  components: {
    Card,
    Button,
    TabIcon,
    WindowIcon,
    IncognitoIcon,
    DeleteIcon,
    UrlTextView
  },
  data() {
    return {
      askDelete: false
    };
  },
  props: {
    id: [String, Number],
    type: String,
    title: String,
    created: Number,
    url: String,
    selected: {
      type: Boolean,
      default: false
    },
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
      if (typeof val !== "number" || !val) {
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
