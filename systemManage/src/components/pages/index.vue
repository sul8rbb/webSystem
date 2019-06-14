<template>
  <div class="wrapper">
    <v-header class="header"></v-header>
    <v-main></v-main>
  </div>
</template>

<script type="text/ecmascript-6">
import vHeader from "../views/header";
import vMain from "../views/main";
export default {
  components: {
    vHeader,
    vMain
  },
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

.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: $headerH;
  background: $primary;
}

.main {
  flex: 1;
}
</style>
