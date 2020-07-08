<template>
  <div class="ll-container">
    <video src="../../video/video.mp4" loop autoplay muted class="b_video"></video>
    <log></log>
  </div>
</template>
<script>
import Log from "../../components/login";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    Log
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang="scss">
.ll-container {
  display: flex;
  width: 100%;
  height: 100%;
  .b_video {
    // width: 100%;
    // height: 100%;
    object-fit: cover;
  }
}
</style>
