
export const state = () => ({
	pageType: '',
	title: '',
	subtitle: '',
	featureImage: '',
	content: '',
	author: '',
	date: '',
});
export const mutations = {
	set(state, data) {
		state = Object.assign(state, data);
	},
};
export const actions = {
	async nuxtServerInit({ dispatch }, { req }) {
		const initialisationActions = [
			dispatch('navMenus/refreshAllNavMenus'),
			dispatch('settings/refreshAllSettings'),
		];
		await Promise.all(initialisationActions);
	},
	set({ commit }, { resource, slug }) {
		if (!resource) {
			setOtherPageData(commit, this.$siteConfig);
		} else {
			const data = Object.assign(resource.getOne(slug), {
				pageType: resource.slug,
			});
			data.slug = slug;
			commit('set', data);
		}
	},
};

function setOtherPageData(commit, siteConfig) {
	commit('set', {
		title: siteConfig.siteName,
		subtitle: siteConfig.tagline,
		featureImage: siteConfig.featureImage,
	});
}