# Fast campus Vue3 Movie app

## 실시간 이미지 리사이징

서버에 저장된 이미지를 요청할때 주소에 사이즈를 명시해서 요청

https://heropy.blog/2019/07/21/resizing-images-cloudfrount-lambda/

## vue 플러그인

https://v3.ko.vuejs.org/guide/plugins.html#%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5

### 생성

#### src/plogins/plgin.js

```javascript
export default {
  install(app) {
    app.config.globalProperties.$loadImage = (src) => {
      return new Promise((resolve) => {
        const img = document.createElement("img");
        img.src = src;
        img.addEventListener("load", () => {
          resolve();
        });
      });
    };
  },
};
```

### 등록

#### main.js

```javascript
import loadImage from "./plugins/loadImage";
createApp(App).use(loadImage);
```

### 사용

#### 어쩌고.vue

```javascript
methods: {
	async init() {
		await this.$loadImage(poster);
		this.imageLoading = false;
	}
	init() {
		this.$loadImage(src).then(() => this.imageLoading = false );
	}
}
```
