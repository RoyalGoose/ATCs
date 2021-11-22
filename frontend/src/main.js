import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCheck,
    faArrowRight,
    faArrowLeft,
    faChevronDown,
    faTimes,
    faExternalLinkAlt
 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck)
library.add(faArrowRight)
library.add(faArrowLeft)
library.add(faChevronDown)
library.add(faTimes)
library.add(faExternalLinkAlt)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
