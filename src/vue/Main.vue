<template>
	<div class="root">
        <theme-controller ref="themeController" />
        <title-bar title="Axeri" />

        <nav-bar :links="[
            {
                href: '/',
                label: 'Home'
            },
            {
                href: '/about',
                label: 'About'
            }
        ]" />

		<div class="page">
            <router-view />
        </div>
	</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Ref } from "vue-property-decorator";

export default class Main extends Vue {
    @Ref("themeController") theme!: any;

    public mounted() {
        this.theme.loadTheme("Dark");
    }
}
</script>

<style lang="less" scoped>
@import "./components/Config";

.root {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    .page {
        height: calc(100% - 40px);
        display: flex;
        width: 100vw;
        overflow: auto;
    }
}
</style>