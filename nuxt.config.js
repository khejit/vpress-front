require("dotenv").config();

import axios from 'axios';
import build from './config/build';
import { modules, modulesSettings } from './config/modules';
import {debug, wpUrl} from './utilities/helper';

// process.env.DEBUG = 'nuxt:*';

export default {
	debug,
	mode: 'universal',
	env: {
		nuxtDebug: debug,
		nuxtFrontUrl: process.env.NUXTPRESS_FRONT_URL || 'localhost:3000',
		NUXTPRESS_WP_PORT: process.env.NUXTPRESS_WP_PORT || '3080',
		NUXTPRESS_WP_URL: wpUrl,
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#683ba3' },
	/*
	 ** Global CSS
	 */
	css: ['~/assets/scss/styles.scss'],
	styleResources: {
		scss: ['~/assets/scss/partials/_vars.scss'],
	},
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'~/plugins/Globals',
		'~/plugins/OptiImage',
		'~/plugins/Disqus',
		'~/plugins/EventBus',
		'~/plugins/Components'
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/dotenv-module
		['@nuxtjs/dotenv', { filename: '.env' }],
		// Doc: https://github.com/nuxt-community/style-resources-module
		'@nuxtjs/style-resources',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: modules,
	...modulesSettings,
	/*
	 ** Build configuration
	 */
	build: {
		...build,
	},
	generate: {
		routes: () => {
			return axios.get(`${wpUrl}/wp-json/wuxt/v1/generate`).then(({ data }) => data);
		},
	},
};
