require('./bootstrap');

import { createApp, h } from 'vue';
import { App, plugin, createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import  VueGoogleMaps from '@fawmi/vue-google-maps'
import Toast, { useToast } from "vue-toastification";
import 'vue-toastification/dist/index.css'

const options = {
    // You can set your default options here
    position: "bottom-right",
    timeout: 5000,
    closeOnClick: false,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: false,
    rtl: false
};

import ToastBody from "./components/ToastBody.vue";

const toast = useToast();

const toaster = {
    success(props={title:'', desc:'', options:{}}){
        toast.success( {
            props: {
                title: props.title,
                desc: props.desc
            },
            component: ToastBody
        },props.options)
    },
    error(props={title:'', desc:'', options:{}}){
        toast.error( {
            props: {
                title: props.title,
                desc: props.desc,
                error: true
            },
            component: ToastBody
        },props.options)
    },
    clear(){
        toast.clear()
    }
}



const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const app = createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        const myApp = createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(VueGoogleMaps, {
                load: {
                    key: '',
                },
            })
            .use(Toast,options)
            .mixin({ methods: { route: (name, params, absolute) => route(name, params, absolute, Ziggy) } });

            myApp.config.globalProperties.$toaster = toaster;
            myApp.mount(el);
            return myApp;
    },
});

InertiaProgress.init({ color: '#9f1218' });
