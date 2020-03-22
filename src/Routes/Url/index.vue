<template>
  <Container>
    <h2 class="main-heading" :title="bucket.title">{{ bucket.title }}</h2>
    <div class="flex v-center flex-between">
      <Button @click="goBack()"><ArrowBackIcon /></Button>
      <Button v-if="addUrl" @click="addUrl = false">
        Cancel Add Url
      </Button>
      <div v-else>
        <Button @click="handleAddUrl()">Add Url</Button>
        <Button @click="handleAddUrl()">Add Current Tab</Button>
      </div>
    </div>
    <div class="list-wrapper">
      <p
        v-if="items && !items.length && !addUrl"
        class="info-piece text-center"
      >
        Nothing here. Click on <code>Add Url</code> or
        <code>Add Current Tab</code> to add an item.
      </p>
      <div v-if="addUrl">
        <Card>
          <h4 class="mb-10">Add New Url</h4>
          <div class="flex">
            <InputText
              placeholder="Type Title"
              type="text"
              class="flex-100 mr-10"
              v-model="urlName"
            />
            <InputText
              placeholder="Paste Url"
              type="text"
              class="flex-100 mr-10"
              v-model="urlAddress"
            />
            <Button @click="onSaveUrl()">Save</Button>
          </div>
          <div v-if="urlError" class="error-text mt-5">
            Please enter a title and url
          </div>
        </Card>
      </div>
      <BucketUrl
        v-for="item in items"
        v-bind:key="item.id"
        :title="item.title"
        :id="item.id"
        :url="item.url"
        :created="item.created"
        @onBucket="openBucket($event)"
        @onAdd="onAddClick($event)"
        @onDelete="onDelete($event)"
      />
    </div>
  </Container>
</template>

<script>
import { mapGetters } from "vuex";
import "../../Styles/main.css";
import "../../Styles/flex.css";
import "../../Styles/heading.css";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import BucketUrl from "../../Components/BucketUrl";
import Card from "../../Components/Card";
import InputText from "../../Components/Input";
import ArrowBackIcon from "../../Components/Icons/ArrowBackIcon";
export default {
  name: "Url",
  components: {
    Container,
    Button,
    BucketUrl,
    Card,
    InputText,
    ArrowBackIcon
  },
  data() {
    return {
      addUrl: false,
      urlName: "",
      urlAddress: "",
      urlError: false
    };
  },
  computed: {
    bucket() {
      return this.getCurrentBucket();
    },
    items() {
      return this.getCurrentBucketItems();
    }
  },
  methods: {
    ...mapGetters(["getCurrentBucket", "getCurrentBucketItems"]),
    handleAddUrl() {
      this.addUrl = true;
    },
    onSaveUrl() {
      if (!this.isAddUrlFormValid()) {
        this.urlError = true;
      } else {
        const url = {
          title: this.urlName.trim(),
          url: this.urlAddress.trim()
        };
        this.$store.dispatch("addUrl", { bucketId: this.bucket.id, url });
        this.resetAddUrl();
      }
    },
    isAddUrlFormValid() {
      return this.urlName.trim() && this.urlAddress.trim();
    },
    resetAddUrl() {
      this.urlName = "";
      this.urlAddress = "";
      this.addUrl = false;
      this.urlError = false;
    },
    onDelete(urlId) {
      this.$store.dispatch("removeUrl", { bucketId: this.bucket.id, urlId });
    },
    goBack() {
      this.$store.commit("changeRoute", "main");
    }
  }
};
</script>
