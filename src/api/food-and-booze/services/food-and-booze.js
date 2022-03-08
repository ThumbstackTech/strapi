'use strict';

/**
 * food-and-booze service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-and-booze.food-and-booze');
