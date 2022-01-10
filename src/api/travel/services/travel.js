'use strict';

/**
 * travel service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::travel.travel');
