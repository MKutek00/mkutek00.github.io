<script setup lang="ts">
import Project from './components/Project.vue';

const projects = [
  {
    work: true,
    title: 'ANDON',
    subtitle: [
      {
        icon: 'https://vuejs.org/logo.svg',
        text: 'VUE',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        text: 'PINIA',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        text: 'ELECTRON',
      },
      {
        icon: 'https://vuetifyjs.com/favicon.ico',
        text: 'VUETIFY',
      },
      {
        icon: 'https://nestjs.com/favicon.fe097249.ico',
        text: 'NEST',
      },
      {
        icon: 'https://github.com/eclipse-mosquitto/mosquitto/blob/master/logo/mosquitto-logo-min.svg?raw=TRUE',
        text: 'MOSQUITTO',
      },
      {
        icon: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vertical_white.svg',
        text: 'MARIADB',
      },
    ],
    text: `Development of an Andon notification system for reporting and informing employees about failures and issues in the production process. <br>
    &middot Backend development using NestJS, supporting communication via HTTP (Nest-Fastify) and MQTT (Mosquitto), along with integration with PLC controllers through TCP microservices. <br>
    &middot Creation of client applications based on Vue 3 and Electron.js, including the implementation of a WebService for PUSH notifications. <br>
    &middot Configuration and preparation of software for client computers running on Linux.`,
  },
  {
    work: true,
    title: 'ANDON',
    subtitle: [
      {
        icon: 'https://vuejs.org/logo.svg',
        text: 'VUE',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        text: 'PINIA',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        text: 'ELECTRON',
      },
      {
        icon: 'https://vuetifyjs.com/favicon.ico',
        text: 'VUETIFY',
      },
      {
        icon: 'https://nestjs.com/favicon.fe097249.ico',
        text: 'NODEJS',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        text: 'EXPRESSJS',
      },
      {
        icon: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vertical_white.svg',
        text: 'MARIADB',
      },
    ],
    text: `Design, development, and maintenance of a MES (Manufacturing Execution System) used for monitoring the production process. <br>
    &middot Development of the application server in Node.js, handling continuous communication with PLCs (via TCP) and integration with SAP (via SOAP). <br>
    &middot Design and implementation of the user interface using Vue 3 and Electron.js. <br>
    &middot Collaboration with the production team to tailor system functionalities to the specific needs of the plant.`,
  },
  {
    title: 'My Stock',
    subtitle: [
      {
        icon: 'https://vuejs.org/logo.svg',
        text: 'VUE',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        text: 'PINIA',
      },
      {
        icon: 'https://vuetifyjs.com/favicon.ico',
        text: 'VUETIFY',
      },
      {
        icon: 'https://nestjs.com/favicon.fe097249.ico',
        text: 'NEST',
      },
      {
        icon: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vertical_white.svg',
        text: 'MARIADB',
      },
    ],
    text: `Web application for tracking the status of your stock prices.
    You can add stocks to your portfolio and monitor their performance.
    WebSockets and Web Scraping, get live market data.`,
    action: [
      {
        type: 'CODE',
        link: 'https://github.com/MKutek00/stock_tracker_nest',
      },
      {
        type: 'CODE',
        link: 'https://github.com/MKutek00/stock_tracker',
      },
      {
        type: 'APP',
        link: '',
      },
    ],
  },
  {
    title: 'Mobile Doctor',
    subtitle: [
      {
        icon: 'https://vuejs.org/logo.svg',
        text: 'VUE',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        text: 'PINIA',
      },
      {
        icon: 'https://vuetifyjs.com/favicon.ico',
        text: 'VUETIFY',
      },
      {
        icon: 'https://www.python.org/favicon.ico',
        text: 'PYTHON',
      },
      {
        icon: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vertical_white.svg',
        text: 'MYSQL',
      },
    ],
    text: `Python and Vue3 Web application for scheduling appointments between doctor and patient.`,
    action: [
      {
        type: 'CODE',
        link: 'https://github.com/MKutek00/stock_tracker_nest',
      },
      {
        type: 'CODE',
        link: 'https://github.com/MKutek00/stock_tracker',
      },
      {
        type: 'APP',
        link: '',
      },
    ],
  },
  {
    title: 'Sunday League v2',
    subtitle: [
      {
        icon: 'https://vuejs.org/logo.svg',
        text: 'VUE',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        text: 'PINIA',
      },
      {
        icon: 'https://vuetifyjs.com/favicon.ico',
        text: 'VUETIFY',
      },
      {
        icon: 'https://www.php.net/images/logos/new-php-logo.svg',
        text: 'PHP',
        large: true,
      },
      {
        icon: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vertical_white.svg',
        text: 'MARIADB',
      },
      {
        icon: 'https://docker.com/favicon.ico',
        text: 'DOCKER',
      },
    ],
    text: `Adjusted version of the Sunday League project.
      Switched to Vue 2 on the frontend.
      Added web scraping as a data source and integrated Google API Geofencing for localization utilities. `,
    action: [
      {
        type: 'CODE',
        link: 'https://github.com/MKutek00/SundayLeague-Vue.js-PHP-',
      },
      {
        type: 'APP',
        link: '',
      },
    ],
  },
  {
    title: 'Sunday League v1',
    subtitle: [
      {
        icon: 'https://www.php.net/images/logos/new-php-logo.svg',
        text: 'PHP',
        large: true,
      },
      {
        icon: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vertical_white.svg',
        text: 'MARIADB',
      },
      {
        icon: 'https://docker.com/favicon.ico',
        text: 'DOCKER',
      },
    ],
    text: `First version of Sunday League web application. Created with simple PHP and JS only`,
    action: [
      {
        type: 'CODE',
        link: 'https://github.com/MKutek00/Sunday-League',
      },
      {
        type: 'APP',
        link: '',
      },
    ],
  },
  {
    title: 'JAVA - TODO',
    subtitle: [
      {
        icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
        text: 'JAVA',
      },
    ],
    text: `Developed a simple to-do list application using native Java during a training program conducted by EPAM.`,
    action: [
      {
        type: 'CODE',
        link: 'https://github.com/MKutek00/Java---ToDo',
      },
      {
        type: 'APP',
        link: '',
      },
    ],
  },
];

function openAndDownload() {
  const fileUrl = './CV_PL.pdf';

  window.open(fileUrl, '_blank');

  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = 'CV_PL.pdf';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="py-0">
        <v-row class="h-100">
          <v-col cols="5" class="my-auto px-10">
            <v-avatar size="200" image="/Me.jpg"></v-avatar>
            <h1>Mateusz Kutek</h1>
            <h2
              class="text-subtitle-1 text-medium-emphasis font-weight-thin text-justify w-75"
              style="line-height: 1.35 !important; letter-spacing: 0.025em !important"
            >
              I am a Full-Stack Software Engineer with a strong passion for coding. I hold a Bachelor's degree in
              Computer Science and Master's degree in Computers Science - Cybersecurity from Cracow University of
              Technology. My experience includes personal projects as well as professional roles at Nidec Motors &
              Actuators
            </h2>
            <v-list class="mt-5 bg-transparent" density="compact" nav slim>
              <v-list-subheader><h3>Experience</h3></v-list-subheader>
              <v-list-item subtitle="Nidec Motors & Actuators • Full Time" title="10/2023 - current">
                <template v-slot:prepend>
                  <v-avatar>
                    <v-icon icon="mdi-briefcase-account-outline" size="30"></v-icon>
                  </v-avatar>
                </template>
              </v-list-item>
              <v-list-item subtitle="Nidec Motors & Actuators • Intern" title="07/2023 - 10/2023">
                <template v-slot:prepend>
                  <v-avatar>
                    <v-icon icon="mdi-briefcase-account-outline" size="30"></v-icon>
                  </v-avatar>
                </template>
              </v-list-item>
            </v-list>
            <v-list class="bg-transparent text-body-2" density="compact" slim :lines="false">
              <v-list-subheader class="text-white"><h3>Contact Info</h3></v-list-subheader>
              <v-list-item prepend-icon="mdi-email-outline">
                <a href="mailto:zmati999@gmail.com" target="_blank" class="text-decoration-none text-white"
                  >zmati999@gmail.com</a
                >
              </v-list-item>
              <v-list-item prepend-icon="mdi-github">
                <a href="https://github.com/MKutek00" target="_blank" class="text-decoration-none text-white">Github</a>
              </v-list-item>
              <v-list-item prepend-icon="mdi-linkedin">
                <a href="https://www.linkedin.com/in/mkutek00/" target="_blank" class="text-decoration-none text-white"
                  >Linkedin</a
                >
              </v-list-item>
              <v-divider class="w-50" />
              <v-list-item prepend-icon="mdi-book-open-variant-outline">
                <a href="#" @click="openAndDownload" class="text-decoration-none text-white"> Read resume - PL </a>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="7" class="overflow-y-auto" style="max-height: 100vh">
            <Project v-for="(project, pIdx) in projects" :key="`project_${pIdx}`" v-bind="project"></Project>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
a:hover {
  text-decoration: underline !important;
}

::-webkit-scrollbar {
  display: none;
}
</style>
