<template>
    <div class="root">
        <div class="image"></div>
        <div class="cover"></div>

        <div class="content">
            <h1>{{ header }}</h1>
            <p v-if="description">{{ description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Banner extends Vue {
    @Prop({ default: "Header" }) header!: string;
    @Prop() description!: string;
}
</script>

<style lang="less" scoped>
@import "./Config";

.root {
    width: 100%;
    height: 300px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    .cover, .image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
    }

    .cover {
        background: @layer0;
        opacity: 0.5;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: @text;
        font-family: @mainFont;
        position: absolute;

        p {
            color: @textDim;
            font-size: 14px;
            margin: 5px 0;
        }

        h1 {
            font-size: 30px;
            margin: 5px 0;
            font-weight: lighter;
        }
    }
}
</style>