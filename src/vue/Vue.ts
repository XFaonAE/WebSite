import { createApp } from "vue";
import Main from "./Main.vue";
import router from "./plugins/Router";
import FluxUi from "@axeridev/flux-ui";
import NavBar from "./components/NavBar.vue";

const app = createApp(Main);

app.use(router);
app.use(FluxUi.create());

const registerComponents = (components: { [ index: string]: any }) => {
    for (const component in components) {
        app.component(component, components[component]);
    }
}

registerComponents({
    NavBar
});

app.mount("#app");
