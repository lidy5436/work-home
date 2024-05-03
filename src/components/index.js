import BasicCarBox from './basic-car-box/index.vue'
import BasicFooter from './basic-footer/index.vue'

export default {
    install(app) {
        app.component('basic-car-box', BasicCarBox)
        app.component('basic-footer', BasicFooter)
    }
}
