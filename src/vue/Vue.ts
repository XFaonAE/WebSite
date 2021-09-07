import { createApp } from "vue";
import Main from "./Main.vue";
import router from "./plugins/Router";
import FluxUi from "@axeridev/flux-ui";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Banner from "./components/Banner.vue";

const app = createApp(Main);

app.use(router);
app.use(FluxUi.create());

const registerComponents = (components: { [ index: string]: any }) => {
	for (const component in components) {
		app.component(component, components[component]);
	}
}

registerComponents({
	NavBar,
	Footer,
    Banner
});

app.mount("#app");
