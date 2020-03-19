<script>
import "./Styles/main.css";
import "./Styles/flex.css";
import "./Styles/heading.css";
import Main from "./Routes/Main";

const routes = {
  main: Main
};

export default {
  name: "App",
  computed: {
    ViewComponent() {
      return routes[this.$store.state.currentRoute];
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
};
</script>
