<template>
  <footer>
    <logo />
    <p>(c){{ new Date().getFullYear() }} Haebin</p>
  </footer>
</template>
<script>
import Logo from '~/components/Logo';

export default {
	components: {
		Logo
	}
}
</script>

<style lang="scss" scoped>
footer {
	padding: 70px 0;
	text-align: center;
	opacity: .3;
	.logo {
		display: block;
		margin-bottom: 4px;
		text-decoration: none;
	}
}
</style>