import Vue from 'vue';
// import { HelloWorld } from './components/HelloWorld';
// console.log(HelloWorld)

// Vue.component('hello-world', HelloWorld);
new Vue({
    el: '#app',
    mounted() {
        document.title = `Hello World`;
    },
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
