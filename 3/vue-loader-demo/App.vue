<template>
    <h1>Welcome Vue</h1>
    <hr>
    <h2 @click="change">{{msg}}</h2>
    <my-menu></my-menu>
</template>

<script>
    import Menu from './components/Menu.vue'

    export default {
        data() {
            return {
                msg:'welcome Vue ^-^'
            }
        },
        methods: {
            change() {
                this.msg = 'haha'
            }
        },
        components: {
            'my-menu': Menu
        }
    }
</script>

<style>
    body {
    background: #ccc
    }
</style>