<template>
  <div
    class="movie"
    :style="{ backgroundImage: `url(${movie.Poster})` }">
    <Loader
      v-if="imageLoading"
      :size="1.5"
      absolute />
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
import Loader from '~/components/Loader'
export default {
  components: {
    Loader
  },
	props: {
		movie: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
      imageLoading: true
    }
	},
	mounted() {
		// created는 컴포넌트가 생성된 직후라 html구조와 연결된 상태가 아님.
		// html과 연결되어 사용해야할때는 mounted 사용
    this.init()
  },
	methods: {
		async init() {
			const poster = this.movie.Poster;
			if (!poster || poster === 'N/A') {
				this.imageLoading = false;
			} else {
				await this.$loadImage(poster);
				this.imageLoading = false;
			}
		}
	}
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