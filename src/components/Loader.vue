<template>
  <div
    :class="[
      'spinner-border text-primary', 
      {
        absolute,
        fixed,
      }]"
    :style="{ 
      width: `${size}rem`,
      height: `${size}rem`,
      zIndex,
    }">
  </div>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 2
		},
		absolute: {
			type: Boolean,
			default: false
		},
		fixed: {
			type: Boolean,
			default: false
		},
		zIndex: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style lang="scss" scoped>
	.spinner-border {
		margin: auto;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		&.absolute {
			position: absolute;
		}
		&.fixed {
			position: fixed;
		}
	}
</style>