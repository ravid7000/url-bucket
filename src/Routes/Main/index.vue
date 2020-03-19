<template>
  <div id="app">
    <Container>
      <div class="flex v-center flex-between">
        <h1>Bucket</h1>
        <Button v-if="addBucket" @click="addBucket = false">
          Cancel Create Bucket
        </Button>
        <Button v-else @click="addBucket = true">Create Bucket</Button>
      </div>
      <div class="list-wrapper">
        <div v-if="addBucket">
          <Card>
            <div class="flex">
              <Input
                placeholder="Type bucket name"
                type="text"
                class="flex-100"
                :value="bucketName"
                @input="bucketName = $event.target.value"
              />
            </div>
            <Button @click="onSaveBucket()">Save</Button>
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
import Input from "../../Components/Input";
export default {
  name: "Main",
  components: {
    Bucket,
    Button,
    Container,
    Card,
    Input
  },
  data() {
    return {
      addBucket: false,
      bucketName: ""
    };
  },
  methods: {
    onAddClick(id) {
      console.log(id);
    },
    onSaveBucket() {
      const bucket = {
        title: this.bucketName
      };
      this.$store.commit("addBucket", bucket);
      this.bucketName = "";
    }
  },
  computed: {
    buckets() {
      return this.$store.state.buckets;
    }
  }
};
</script>
