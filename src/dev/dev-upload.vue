<template>
  <div>
    <h2>开发测试</h2>
    <p>
      <button @click="getChildrenFunction">
        点击触发子组件toast
      </button>
    </p>
    <test-panel ref="panel"></test-panel>
    <test-toast ref="toast"></test-toast>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testArr: [1, 2, 6]
    };
  },
  components: {},
  created() {
    console.log('现在的api： ' + this.$msg)
    console.log(this.$myMethod(this.testArr))
    this.$nextTick(() => {
      console.log(this.$refs.panel.$el)
    })
  },
  methods: {
    getChildrenFunction() {
      this.$nextTick(() => {
        this.$refs.toast.toastPlugin('在父组件里出发调用toast', 2500)
      })
    }
  }
};
</script>

<style>
</style>
