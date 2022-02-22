<template>
  <div
    class="color-contrast-swatch"
    :style="`backgroundColor:${color.background}`"
  >
    <div class="color-contrast-swatch__color-names">
      <span class="color-name d-none">{{ color.background }}</span>
      <span class="color-value">{{ color.background }}</span>
    </div>

    <div class="color-contrast-swatch__contrast-table">
      <table class="contrast-table">
        <thead>
          <tr class="contrast-table__row">
            <td><span class="visually-hidden">Label</span></td>
            <td>16px</td>
            <td>24px</td>
          </tr>
        </thead>
        <tbody>
          <tr class="contrast-table__row">
            <td :style="`color: ${color.value}`">Text</td>
            <td>
              {{ color.normalLegibility }}
            </td>
            <td>
              {{ color.largeLegibility }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: "ColorContrastSwatch",
  props: {
    color: Object,
  },
};
</script>

<style lang="scss">
.color-contrast-swatch {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  color: $color-base-black;
  min-width: 300px;
  min-height: 100px;
  padding: 16px;
}

.color-contrast-swatch__color-names {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: 200px;
  align-items: flex-start;
  margin-right: 2rem;
}

.color-value {
  font-weight: 600;
  font-family: monospace;
  font-size: $font-size-1;
  min-width: 10ch;
}

.color-contrast-swatch__contrast-table {
  display: flex;
  justify-items: revert-layer;
  justify-content: flex-end;
  flex: 1 1 auto;
}

.contrast-table {
  border-collapse: collapse;
  margin-left: auto;
}

.contrast-table__row {
  border-bottom: 1px solid $color-base-black;
}

td {
  padding: 3px 6px;
  min-width: 16ch;
  line-height: 1.1;
}
</style>