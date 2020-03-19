<template>
  <div id="app">
    <Container>
      <div class="flex v-center flex-between">
        <h1>Bucket</h1>
        <Button v-if="addBucket" @click="addBucket = false">
          Cancel Create Bucket
        </Button>
        <Button v-else @click="handleAddBucket()">Create Bucket</Button>
      </div>
      <div>
        <SearchInput type="search" placeholder="Search..." />
      </div>
      <div class="list-wrapper">
        <div v-if="addBucket">
          <Card>
            <h4 class="mb-10">Create new bucket</h4>
            <div class="flex">
              <InputText
                ref="bucketNameInput"
                placeholder="Type bucket name"
                type="text"
                class="flex-100 mr-10"
                v-model="bucketName"
              />
              <Button @click="onSaveBucket()">Save</Button>
            </div>
            <div v-if="bucketNameError" class="error-text mt-5">
              Please enter a bucket name
            </div>
            <label for="addOpenTabs" class="tabsCheckbox">
              <input
                type="checkbox"
                id="addOpenTabs"
                v-model="withOpenedTabs"
              />
              Create bucket with opened tabs
            </label>
          </Card>
        </div>
        <Bucket
          v-for="bucket in buckets"
          v-bind:key="bucket.id"
          :title="bucket.title"
          :items="bucket.items.length"
          :id="bucket.id"
          @onAdd="onAddClick($event)"
          @onDelete="onAddClick($event)"
        />
      </div>
    </Container>
  </div>
</template>

<script>
import "../../Styles/main.css";
import "../../Styles/flex.css";
import "../../Styles/heading.css";
import Bucket from "../../Components/Bucket";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Card from "../../Components/Card";
import InputText from "../../Components/Input";
import SearchInput from "../../Components/SearchInput";

export default {
  name: "Main",
  components: {
    Bucket,
    Button,
    Container,
    Card,
    InputText,
    SearchInput
  },
  data() {
    return {
      addBucket: false,
      bucketName: "",
      bucketNameError: false,
      withOpenedTabs: false
    };
  },
  methods: {
    handleAddBucket() {
      this.addBucket = true;
    },
    onSaveBucket() {
      if (!this.bucketName.trim()) {
        this.bucketNameError = true;
      } else {
        const bucket = {
          title: this.bucketName.trim(),
          withOpenedTabs: this.withOpenedTabs
        };
        this.$store.commit("addBucket", bucket);
        this.resetAddBucket();
      }
    },
    resetAddBucket() {
      this.bucketName = "";
      this.bucketNameError = false;
      this.addBucket = false;
      this.withOpenedTabs = false;
    }
  },
  computed: {
    buckets() {
      return this.$store.state.buckets;
    }
  },
  watch: {
    bucketName(newName) {
      if (newName.trim()) {
        this.bucketNameError = false;
      }
    }
  }
};
</script>
