'use strict';

/**
 * destination service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::destination.destination');
