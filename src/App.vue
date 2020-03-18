<template>
  <div id="app">
    <Container>
      <div class="flex v-center flex-between">
        <h1>Bucket</h1>
        <Button>Create Bucket</Button>
      </div>
      <div class="list-wrapper">
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
import "./Styles/main.css";
import "./Styles/flex.css";
import "./Styles/heading.css";
import Bucket from "./Components/Bucket";
import Button from "./Components/Button";
import Container from "./Components/Container";
export default {
  name: "App",
  components: {
    Bucket,
    Button,
    Container
  },
  methods: {
    onAddClick: function(id) {
      console.log(id);
    }
  },
  data() {
    return {
      buckets: [
        {
          id: 1,
          title: "Localhost",
          created: 1584453404852,
          items: [
            {
              id: 1,
              title: "Dev",
              url: "http://localhost:3000/",
              created: 1584453404852
            }
          ]
        }
      ]
    };
  }
};
</script>
