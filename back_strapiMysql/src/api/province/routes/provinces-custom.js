module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/provinces1/:identificador',
            handler: 'province.findOne',
            config: {
                auth: false,
            },
        },
    ],
};