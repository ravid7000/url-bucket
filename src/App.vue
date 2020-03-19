<script>
import "./Styles/main.css";
import "./Styles/flex.css";
import "./Styles/heading.css";
import Main from "./Routes/Main";
import Url from "./Routes/Url";

const routes = {
  main: Main,
  url: Url
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
