import { getMixins } from '~/mixins/resourceMixins';

class WpPost {
	constructor() {
		this.slug = 'post';
		this.slugPlural = 'posts';
		this.pretty = 'Post';
		this.plural = 'Posts';
	}
}

// Mixins
Object.assign(WpPost.prototype, getMixins);

export default WpPost;
