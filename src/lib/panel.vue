<template>
  <div>
    <div class="number-panel">
      <p v-show="checkNumber.length > 0" class="number-show">{{checkNumber}}</p>
      <p v-show="!checkNumber" class="number-show"></p>
      <ul>
        <li v-for="index in 9" :key="index" @click="clickThisNumber($event)">{{index}}</li>
        <li @click="clickThisNumber($event)">0</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "test-panel",
  data() {
    return {
      checkNumber: ""
    };
  },
  mounted() {},
  methods: {
    clickThisNumber(e) {
      this.checkNumber = this.checkNumber.concat(e.currentTarget.innerHTML);
    }
  }
};
</script>

<style lang="less" scoped>
.number-show {
  height: 20px;
}
.number-panel {
  ul {
    padding: 0;
    li {
      display: inline-block;
      width: 28%;
      height: 50px;
      line-height: 50px;
      margin-top: 20px;
      background: #ddd;
      border-radius: 8px;
      margin-right: 10px;
      input {
        display: none;
      }
    }
  }
}
</style>


