module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/citys1/:identificador',
            handler: 'city.findOne',
            config: {
                auth: false,
            },
        },
    ],
};