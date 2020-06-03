const build = {
	/*
	 ** You can extend webpack config here
	 */
	extend(config, ctx) {
		if (ctx.isDev) {
			// Allow nicer debugging for the SSR parts of the app by inlining the source maps
			config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
		}
		// config.resolve.alias.vue = 'vue/dist/vue.common';
		/* config.node = {
			fs: 'empty'
		}; */
	},
	babel: {
		presets({ isServer }) {
			return [
				[
					require.resolve('@nuxt/babel-preset-app'),
					{
						buildTarget: isServer ? 'server' : 'client',
						corejs: { version: 3 },
					},
				],
			];
		},
	},
};

if (process.env.NODE_ENV === 'production') {
	build.analyze = true;
}

export default build;
