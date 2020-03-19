<template>
  <Container>
    <div class="flex v-center flex-between">
      <h1>{{ bucket.title }}</h1>
      <Button v-if="addBucket" @click="addBucket = false">
        Cancel Add Url
      </Button>
      <div v-else>
        <Button @click="handleAddBucket()">Add Url</Button>
        <Button @click="handleAddBucket()">Add Current Tab</Button>
      </div>
    </div>
    <div class="list-wrapper">
      <BucketUrl
        v-for="item in items"
        v-bind:key="item.id"
        :title="item.title"
        :id="item.id"
        :url="item.url"
        :created="item.created"
        @onBucket="openBucket($event)"
        @onAdd="onAddClick($event)"
        @onDelete="onAddClick($event)"
      />
    </div>
  </Container>
</template>

<script>
import "../../Styles/main.css";
import "../../Styles/flex.css";
import "../../Styles/heading.css";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import BucketUrl from "../../Components/BucketUrl";
export default {
  name: "Url",
  components: {
    Container,
    Button,
    BucketUrl
  },
  data() {
    return {
      addBucket: false,
      bucket: {},
      items: []
    };
  },
  beforeMount() {
    const bucketId = this.$store.state.currentBucket;
    this.bucket = this.$store.state.buckets.filter(
      buck => buck.id === bucketId
    )[0];
    this.items = this.bucket.items;
  }
};
</script>
