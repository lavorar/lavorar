'use strict';
// path: ./src/api/city/controllers/city.js

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::city.city', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
        try {
            ctx.body = 'ok';
        } catch (err) {
            ctx.body = err;
        }
    },

    // Method 3: Replacing a core action
    async findOne(ctx) {
        const { identificador } = ctx.params;

        const entity = await strapi.db.query('api::city.city').findOne({ where: { identificador } });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
}));