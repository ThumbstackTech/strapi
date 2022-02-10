'use strict';

/**
 * sight-seeing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sight-seeing.sight-seeing');
