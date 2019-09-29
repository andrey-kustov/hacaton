<template lang="html">
    <a href="#">
        <img :src="path" alt="">
    </a>

</template>

<script>

export default {
    name: "social-btn",
    props: ["path"],
    data() {
        return {

        }
    }
}
</script>

<style lang="css" scoped>
    a {
        display: block;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        max-width: 100%;
        width: 100%;
        max-height: 100%;
        height: 100%;
    }
</style>
