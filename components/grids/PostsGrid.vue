<template>
	<resource-grid
		v-bind="$props"
		:resources="posts"
		:theme="$siteConfig.posts.theme || $siteConfig.cards.theme || null"
	>
		<template v-slot:default="{ item }">
			<post-card
				:title="item.title ? item.title.rendered : ''"
				:link="item.slug ? `/${item.slug}` : ''"
				:image="''"
				:author="'khejit'"
				:date="item.date"
			/>
		</template>
	</resource-grid>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PostCard from "~/components/cards/PostCard";

export default {
	name: "PostsGrid",
	components: { PostCard },
	props: {
		perRow: { type: Number, default: 3 },
		number: { type: Number, default: 0 },
		order: { type: String, default: "DESC" },
		category: {
			type: Array,
			default() {
				return [];
			}
		},
		exclude: { type: String, default: "" }
  },
	computed: {
		...mapState(['posts']),
  },
  mounted(){
    this.getPosts()
  },
  methods: {
    ...mapActions('posts', {
      getPosts: 'getAll'
    })
  }
};
</script>
