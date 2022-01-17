'use strict';

/**
 * destination router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::destination.destination');
