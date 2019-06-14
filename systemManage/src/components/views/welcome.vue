<template>
  <div class="welcome">
    <div class="hello">欢迎使用！</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.welcome {
  background: url('../../../static/css/timg.jpg') center center no-repeat;
  height: 100%;
  width: 1200px;
  background-size: cover;
}

.hello {
  position: absolute;
  top: 50%;
  left: 30%;
  font-size: 40px;
  color: white;
}
</style>
