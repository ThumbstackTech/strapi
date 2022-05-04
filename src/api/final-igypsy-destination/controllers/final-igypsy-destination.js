const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
    "api::final-igypsy-destination.final-igypsy-destination",
    ({ strapi }) => ({
        async find(ctx) {
            (ctx.query = {
                ...ctx.query,
                populate: {
                    Qrb: {
                        fields: ["title", "description"],
                        populate: {
                            Link: {
                                fields: ["title", "description", "link"]
                            }
                        }
                    }
                }
            })
                // Calling the default core action

                ({ data, meta } = await super.find(ctx));

            return { data, meta };
        },
    })
);
