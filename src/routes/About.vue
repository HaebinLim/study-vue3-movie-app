<template>
  <div class="about">
    <div class="photo">
      <Loader
        v-if="imageLoading"
        absolute />
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '~/components/Loader';

export default {
  data() {
    return {
      imageLoading: true,
    }
  },
  components: {
    Loader
  },
  computed: {
    // ...mapState('모듈명', ['상태명']) mapState 함수 실행후 반환된 결과가 전개 연산자로 대입됨
    ...mapState('about', ['image', 'name', 'email', 'phone'])
  },
  /* 전개연산자 안쓰면 이렇게 쓰는거지만, 굳이 직접 할당하지 않기
  computed: mapState('about', [ 
    'image', 
    'name', 
    'email',
    'phone' 
  ]),
  mounted: {
    this.name = '사용할땐 똑같이 this.상태명으로 접근'
  }
  */
  mounted(){
    this.init();
  },
  methods: {
    async init(){
      await this.$loadImage(this.image);
      this.imageLoading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';
.about {
  text-align: center;
  .photo {
    overflow: hidden;
    position: relative;
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 40px;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 20px;
  }
}
</style>