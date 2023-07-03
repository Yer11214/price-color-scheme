<template>
  <div>
    <span :style="{ color: color, ...customStyle }"
      >{{ dot }}{{ value | unitPrice(unit) }}<slot></slot
    ></span>
  </div>
</template>

<script>
let that;
export default {
  name: "priceColorScheme",
  props: {
    // 金额
    value: {
      type: [Number, String],
      default: 0,
      required: true,
    },
    // 货币单位
    unit: {
      type: String,
      default: "￥",
    },
    // 前缀
    dot: {
      type: String,
      default: "",
    },
    // 默认颜色
    color: {
      type: String,
      default: "",
    },
    customStyle: {
      type: Object,
      default: () => { },
    },
  },
  beforeCreate() {
    that = this;
  },
  filters: {
    /**
     * 金钱单位置换  2999 --> 2,999.00
     * @param val
     * @param unit
     * @param location
     * @returns {*}
     */
    unitPrice(val, unit, location) {
      if (
        val === "null" ||
        val === null ||
        val === undefined ||
        val === "undefined" || val === ''
      ){
        return `${this.unit}0.00`;
      }
      else{
        let price = that.formatPrice(val);
      if (location === "before") {
        return price.substr(0, price.length - 3);
      }
      if (location === "after") {
        return price.substr(-2);
      }
      return (unit || "") + price;
      }
      
    },
  },

  methods: {
    /**
     * 货币格式化
     * @param price
     * @returns {string}
     */
    formatPrice(price) {
      return String(Number(price).toFixed(2)).replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
    },
  },
};
</script>
