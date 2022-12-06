module.exports = ({ env }) => ({
    // ...
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                user: {
                    field: 'slug',
                    references: 'name',                    
                },
            },
            slugifyWithCount: true,
            shouldUpdateSlug: true,
        },
    },
    "custom-api": {
        enabled: true,
    },
    "io": {
        "enabled": true,
        "config": {
            "IOServerOptions": {
                "cors": { "origin": "http://localhost:3000", "methods": ["GET", "POST"] },
                "cors": { "origin": "https://lavorar-beta.vercel.app", "methods": ["GET", "POST"] },
            },
            "contentTypes": {
                "notification": '*',
            },
            "events": [
                {
                    "name": "connection",
                    "handler": ({ strapi }, socket) => {
                        // strapi.log.info(`[io] new connection with id ${socket.id}`);
                    },
                },
            ]
        },
    },
    // ...
});