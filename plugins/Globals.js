import SiteConfig from '~/config/_siteConfig'

export default ({ app }, inject) => {
  inject('siteConfig', SiteConfig)
}
