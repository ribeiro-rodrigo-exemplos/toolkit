export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
        {
            title: true,
            name: 'Operações Gerais',
            wrapper: {

                element: '',
                attributes: {},
            },
            class: '',
        },
        {
            name: 'Pesquisas',
            url: '/find',
            icon: 'icon-puzzle',
            children: [
                {
                    name: 'Buckets',
                    url: '/find/buckets',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Maquinas',
                    url: '/find/machines',
                    icon: 'icon-puzzle',
                }
            ],
        },
        {
            title: true,
            name: 'Amazon Webservices',
            wrapper: {

                element: '',
                attributes: {},
            },
            class: '',
        },
        {
            name: 'Contas',
            url: '/accounts',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
    ]
};
