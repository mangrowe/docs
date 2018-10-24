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

Dito isto, é recomendável que o desenvolvedor tenha noções de <b>JavaScript</b>, <b>HMTL</b> e <b>CSS</b> para poder trabalhar com o módulo client e de <b>PHP</b> para trabalhar com o módulo API.