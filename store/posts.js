import {forEach} from 'lodash';

const types = {
	ADD_POSTS: 'ADD_POSTS',
};

export const state = () => ([])

export const mutations = {
    [types.ADD_POSTS] (state, {posts}){
        forEach(posts, (post) => {
            state.push(post)
        })
    }
}

export const actions = {
	async getAll({dispatch}) {
        const posts = await this.$wp.posts().get();
		dispatch('setPosts', {posts})
    },
    async setPosts({commit}, {posts}) {
        commit(types.ADD_POSTS, {posts})
    }
}