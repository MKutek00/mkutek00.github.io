/** @ts-ignore */
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
});

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(vuetify).mount('#app');
