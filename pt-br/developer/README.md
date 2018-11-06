# Desenvolvedor

## Introdução

Criar novos módulos (ou melhorar existentes) pode ser uma boa para adaptar ainda mais o MOKR à realidade da sua organização. Alterar ou criar frontends, incluir novas regras de negócio ou simplesmente colaborar mantendo o sistema sempre livre de erros, são possibilidades que o MOKR proporciona ao desenvolvedor, por ser cem por cento Open Source. Pensando nisso, este guia foi desenvolvido para que você conheça profundamente a estrutura do projeto a fim de que, consiga desenvolver tranquilamente funções que você desejar.

## O Que Você Precisa Para Desenvolver

O MOKR é dividido em dois módulos o client e o api. No client, temos todo o frontend da aplicação, já no api temos o backend da mesma. Vamos conhecer um pouco mais de cada um dos módulos.

>Client: foi desenvolvido usando [Vue.js](https://www.vuejs.org)<br>
>API: foi desenvolvido usando [Laravel](https://laravel.com)

::: warning IMPORTANTE
É importante frisar que devido ao uso do [Quasar Framework](https://quasar-framework.org) em seu desenvolvimento, o MOKR está pronto para funcionar em qualquer plataforma, seja ela mobile (Android ou iOS), web ou desktop. Portanto, o desenvolvedor não precisa preocupar-se em desenvolver mais uma aplicação para se comunicar com o MOKR, se ele usa a versão web e quer uma versão mobile por exemplo, ele pode simplesmente gerar um build para mobile e terá as mesmas funcionalidades da versão web, incluindo a comunicação entre as duas plataformas.
:::

Dito isto, é recomendável que o desenvolvedor tenha noções de JavaScript, HMTL e CSS para poder trabalhar com o módulo client e de PHP para trabalhar com o módulo API.

## Instalações necessárias

Para desenvolver, é necessário que sua máquina tenha as seguintes configurações:

::: tip Client
[NodeJS](https://nodejs.org) >= 8.9.0
:::

Instalando o Vue Cli e o Quasar Global:

```js
npm install -g vue-cli
npm install -g quasar-cli
```

Você também precisa ter o PHP instalado em sua máquina.

::: tip Server
[PHP7](http://php.net) >= 7.1
:::

Para instalar o PHP, é necessário fazer a instalação do Composer. Faça o download neste [link.](https://getcomposer.org/download/) Após feito o download, use o sequinte comando:

```php
mv composer.phar /usr/local/bin/composer
```
:::warning IMPORTANTE
Caso ainda possua dúvida sobre a instalação do Composer, acesse esse [link.](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
:::

Depois de instalados os itens acima, seu ambiente de desenvolvimento estará pronto.

## Clonando projeto no GitHub

Você pode acessar o nosso repositório clicando nesse [link](https://github.com/mangrowe) ou no menu localizado no topo do site. Uma vez na página do GitHub, perceba que existem três projetos à sua disposição porém, os que você vai precisar mesmo são o client e o api, como destaca a imagem:

<img src="https://goo.gl/JsxYkL">

Selecione o projeto client e rode o seguinte comando:

:::v-pre
    git clone https://github.com/mangrowe/client.git
:::

Após isso, selecione o projeto api e rode o seguinte comando:

:::v-pre
    git clone https://github.com/mangrowe/api.git
:::

## Instalando os projetos

Após clonar os projetos do GitHub, siga os seguintes passos para instalar os projetos:

Para o Client, utilize:

:::v-pre
    npm install
:::

::: danger ATENÇÃO
Certifque-se de usar o comando dentro do diretório do projeto clonado, caso você não esteja use:
:::v-pre
    cd diretório_do_projeto
:::

Após o término da instalação, rode a aplicação usando:

:::v-pre
    quasar dev
:::

Para o API utilize:

:::v-pre
    composer global require laravel/installer
:::

Após o término da instalação, rode a aplicação usando:

:::v-pre
    php artisan serve
:::

Você pode ir até a documentação do [Laravel](https://laravel.com/docs/5.7) caso ainda possua alguma dúvida.
