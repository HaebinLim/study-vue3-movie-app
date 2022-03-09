<template>
  <div
    class="movie"
    :style="{backgroundImage: `url(${movie.Poster})`}">
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		movie: {
			type: Object,
			default: () => {}
		}
	},
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.movie {
	$width: 200px;
	overflow: hidden;
	position: relative;
	margin: 10px;
	width: $width;
	height: $width * 3 / 2;
	border-radius: 4px;
	background-color: $gray-400;
	background-size: cover;
	&:hover::after {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 6px solid $primary;
		content: "";
	}
	.info {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 14px;
		font-weight: bold;
		font-size: 14px;
		text-align: center;
		background: rgba($black, .3);
		backdrop-filter: blur(2px);
		.year {
			color: $primary;
		}
		.title {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #fff;
		}
	}
}
</style>