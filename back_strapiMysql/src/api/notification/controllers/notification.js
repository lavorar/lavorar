'use strict';

/**
 * notification controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::notification.notification', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
        try {
            ctx.body = 'ok';
        } catch (err) {
            ctx.body = err;
        }
    },

    // Method 3: Replacing a core action
    async create(ctx) {
        // some logic here
        console.log(ctx.state.user)
        console.log(ctx.request.body)

        const response = await super.create(ctx);       // some more logic
        let datos = {
            user: ctx.request.body.data.user.id,
            user_request: ctx.request.body.data.user_request.id,
            type: ctx.request.body.data.type,
            review_updatedAt: new Date()
        }
        strapi.$io.raw("notificationCreate", datos);
        

        return response;
    }

}));
