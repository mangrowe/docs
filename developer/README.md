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

Therefore, it is recommended that the developer have notions of JavaScript, HMTL and CSS to work with the Client module and PHP to work with the API module.

## Facilities required

To develop, it is necessary that your machine has the following configurations:

::: tip Client
[NodeJS](https://nodejs.org) >= 8.9.0
:::

Installing Vue Cli and Quasar Global: 

```js
npm install -g vue-cli
npm install -g quasar-cli
```

You also need to have PHP installed on your machine.

::: tip Server
[PHP7](http://php.net) >= 7.1
:::

To install PHP, you must install Composer. Access this [link](https://getcomposer.org/download/) to download it.
After downloading, use the following command:

```php
mv composer.phar /usr/local/bin/composer
```

:::warning IMPORTANTE
If you still have questions about the installation of Composer, access this [link.](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
:::

Once you have installed the above items, your development environment will be ready.

## Cloning project in GitHub

You can access our repository by clicking on this [link](https://github.com/mangrowe) or the menu located at the top of the site. Once in the page of GitHub, notice that there are three projects available to you, but what you will need is the client and the api, as the image highlights:

<img src="https://goo.gl/JsxYkL">

Select the client project and run the following command:

:::v-pre
    git clone https://github.com/mangrowe/client.git
:::

After that, select the api project and run the following command:

:::v-pre
    git clone https://github.com/mangrowe/api.git
:::

## Installing the projects

After you have cloned the GitHub projects, follow these steps to install the projects:

For the Client, use:

:::v-pre
    npm install
:::

::: danger ATTENTION
Be sure to use the command inside the cloned project directory, if you are not using it:
:::v-pre
    cd project_directory
:::

After the installation is complete, run the application using:

:::v-pre
    quasar dev
:::

For the API use:

:::v-pre
    composer global require laravel/installer
:::

After the installation is complete, run the application using:

:::v-pre
    php artisan serve
:::

You can go to the [Laravel](https://laravel.com/docs/5.7) documentation if you still have any questions.