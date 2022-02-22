<template>
  <section :class="$style.colors">
    <div :class="$style.heaven"></div>
    <div :class="$style.gray100"></div>
    <div :class="$style.gray200"></div>
    <div :class="$style.gray300"></div>
    <div :class="$style.jasper100"></div>
    <div :class="$style.jasper200"></div>
    <div :class="$style.jasper300"></div>
    <div :class="$style.grass100"></div>
    <div :class="$style.grass200"></div>
    <div :class="$style.grass300"></div>
    <div :class="$style.bay100"></div>
    <div :class="$style.bay200"></div>
    <div :class="$style.bay300"></div>
    <div :class="$style.sand100"></div>
    <div :class="$style.sand200"></div>
    <div :class="$style.sand300"></div>
  </section>
</template>

<script>
export default {
  name: "Colors",
};
</script>

<style lang="scss" module>
.colors {
  display: flex;
  flex-wrap: wrap;
}

.c {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
}

.coal {
  composes: c;
  background: $color-base-black;
}

.heaven {
  composes: c;
  background: $color-brand-heaven;
}

.gray100 {
  composes: c;
  background: $color-base-gray-100;
}

.gray200 {
  composes: c;
  background: $color-base-gray-200;
}

.gray300 {
  composes: c;
  background: $color-base-gray-300;
}

.jasper100 {
  composes: c;
  background: $color-base-jasper-100;
}

.jasper200 {
  composes: c;
  background: $color-base-jasper-200;
}

.jasper300 {
  composes: c;
  background: $color-base-jasper-300;
}

.grass100 {
  composes: c;
  background: $color-base-grass-100;
}

.grass200 {
  composes: c;
  background: $color-base-grass-200;
}

.grass300 {
  composes: c;
  background: $color-base-grass-300;
}

.bay100 {
  composes: c;
  background: $color-base-bay-100;
}

.bay200 {
  composes: c;
  background: $color-base-bay-200;
}

.bay300 {
  composes: c;
  background: $color-base-bay-300;
}

.sand100 {
  composes: c;
  background: $color-base-sand-100;
}

.sand200 {
  composes: c;
  background: $color-base-sand-200;
}

.sand300 {
  composes: c;
  background: $color-base-sand-300;
}
</style>
