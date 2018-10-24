module.exports = {
    title: 'ManGve OKR',
    description: 'The ManGve OKR Documentation',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Introduciton', link: '/introduction/' },
            { text: 'Administrator Guide', link: '/administration/' },
            { text: 'Developer Guide', link: '/developer/' },
            {
                text: 'Languages',
                items: [
                    { text: 'English', link: '' },
                    { text: 'Portuguese', link: '' }
                ]
            },
            { text: 'ManGve', link: 'http://mangve.org' },
            { text: 'GitHub', link: 'https://github.com/mangrowe' }
        ],
        sidebar: [
            '/',
            '/introduction/',
            '/administration/',
            '/developer/'
        ]
    }
}