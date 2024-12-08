import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    template: require('./view.html'),
})
export class HelloWorld extends Vue {}