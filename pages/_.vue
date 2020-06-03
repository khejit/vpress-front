<template>
  <component :is="template" :post="post" />
</template>

<script>
import canFindTemplate from '~/mixins/canFindTemplate';
import {setPageData} from '~/utilities/helper';
import { postMeta } from '~/utilities/yoastHelpers';

export default {
  mixins: [canFindTemplate],
  async asyncData({ app, error, params }) {
    try {
      let post;
      if (params.pathMatch === '') {
        post = (await app.$wp.frontPage())[0];
        return { post };
      }

      post = await app.$wp.slug().name(params.pathMatch);

      return { post };
    } catch (e) {
      const statusCode = e?.data?.status || 500;
      const message = e.message || 'There has been a problem retrieving data from the API';
      error({ statusCode, message });
    }
  },
  computed: {
    wp: () => this.$wp
  },
  data: () => ({ post: {} }),
  head() {
    return this.post ? postMeta(this.post) : {};
  },
};
</script>
