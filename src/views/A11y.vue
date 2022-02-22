<template>
  <div class="colors-list" v-if="colors.length">
    <ColorContrastSwatch
      v-for="color in colors"
      :color="color"
      :key="color.background"
    />
  </div>
</template>

<script>
import _colors from "../data/colors";
import { transformColors } from "../utils";
import ColorContrastSwatch from "../components/ColorContrastSwatch.vue";

export default {
  components: { ColorContrastSwatch },
  name: "A11y",
  data() {
    return {
      colors: transformColors(_colors[0]),
    };
  },
};
</script>