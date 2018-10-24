module.exports = {
    locales: {
        '/': {
            lang: 'English',
            title: 'ManGve OKR',
            description: 'The ManGve OKR Documentation'
        },
        '/pt-br/': {
            lang: 'Português',
            title: 'ManGve OKR',
            description: 'A documentação do ManGve OKR',
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'ManGve OKR',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is avalible',
                        buttonText: 'Refresh'
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Introduciton', link: '/introduction/' },
                    { text: 'Administrator Guide', link: '/administration/' },
                    { text: 'Developer Guide', link: '/developer/' },
                    { text: 'ManGve', link: 'http://mangve.org' },
                    { text: 'GitHub', link: 'https://github.com/mangrowe' }
                ],
                sidebar: [
                    '/',
                    '/introduction/',
                    '/administration/',
                    '/developer/'
                ],
            },
            '/pt-br/': {
                selectText: 'Idiomas',
                label: 'Português',
                editLinkText: 'ManGve OKR',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is avalible',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    { text: 'Início', link: '/pt-br/' },
                    { text: 'Introdução', link: '/pt-br/introduction/' },
                    { text: 'Guia do Administrador', link: '/pt-br/administration/' },
                    { text: 'Guia do Desenvolvedor', link: '/pt-br/developer/' },
                    { text: 'ManGve', link: 'http://mangve.org' },
                    { text: 'GitHub', link: 'https://github.com/mangrowe' }
                ],
                algolia: {},
                sidebar: [
                    '/pt-br/',
                    '/pt-br/introduction/',
                    '/pt-br/administration/',
                    '/pt-br/developer/'
                ]
            }
        }
    }
}