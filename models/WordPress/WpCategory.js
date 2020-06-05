import { getMixins } from '~/mixins/resourceMixins';

class Category {
	constructor(axios) {
		this.slug = 'category';
		this.slugPlural = 'categories';
		this.pretty = 'Category';
		this.plural = 'Categories';
		this.axios = axios;
	}
}

// Mixins
Object.assign(Category.prototype, getMixins);
export default Category;
