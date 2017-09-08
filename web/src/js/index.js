import Vue from 'vue'
import Application from './components/Application.vue'

if (window.webkitAudioContext) {
    window.AudioContext = window.webkitAudioContext;
}

new Vue({
    el: '#app',
    components: { Application }
});
