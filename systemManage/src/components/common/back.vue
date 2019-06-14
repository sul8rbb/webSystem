<template>
  <div class="back">
    <el-button type="primary" round @click="$router.go(-1)">返回</el-button>
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

.back {
  display: inline-block;
}
</style>
