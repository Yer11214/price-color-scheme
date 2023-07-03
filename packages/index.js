// 导入组件
import priceColorScheme from "./price-color-scheme.vue";
const install = function (Vue) {
  if (install.installed) return (install.installed = true);
  Vue.component(priceColorScheme.name, priceColorScheme);
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default install;
