# Developer

## Introdution

Creating new modules (or upgrading existing ones) may be a good way to further adapt MOKR to your organization's reality. Changing or creating frontends, including new business rules or simply collaborating while keeping the system always error free, are possibilities that MOKR provides to the developer, as it is one hundred percent Open Source. With this in mind, this guide is designed to give you a thorough understanding of the structure of the project so that you can develop functions that you desire.

## What you need to develop

The MOKR is divided into two modules, the client and api. In the client, we have all the frontend of the application, already in the api we have the backend of it. Let's get to know a little more about each of the modules.

>Client: was developed using [Vue.js](https://www.vuejs.org)<br>
>API: was developed using [Laravel](https://laravel.com)

::: warning IMPORTANT
It is important to note that because of the use of [Quasar Framework](https://quasar-framework.org") in it's development, MOKR is ready to work on any platform, be it mobile (Android or iOS), web or desktop. So the developer does not have to worry about developing another application to communicate with MOKR, if he uses the web version and wants a mobile version, for example, he can simply generate a mobile version and have the same web version functionality, including communication between the two platforms.
:::

Therefore, it is recommended that the developer have notions of <b>JavaScript</b>, <b>HMTL</b> and <b>CSS</b> to work with the Client module and <b>PHP</b> to work with the API module.