<template>
  <div class="blog-box vertical">
    <img class="blog-img" :src="image" />
    <div class="white-card">
      <p class="blog-txt">
        blog text blog text blog text blog textblog text blog text blog text
        blog textblog text blog text blog text blog textblog text blog text blog
        text blog text
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-box-vertical",
  props: { image: String, title: String, description: String },
};
</script>

<style scoped>
.blog-box.vertical {
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 18px;
}
.blog-box.vertical .blog-img {
  height: 100px;
  width: 160px;
  display: inline-block;
}
.blog-txt,
.blog-big-txt {
  -webkit-line-clamp: 3;
}
.white-card {
  padding: 2px 20px;
  display: inline-block;
  width: calc(100% - 162px);
  margin: auto;
  margin-left: -20px;
}
@media screen and (max-width: 479px) {
.white-card {
  padding: 2px 20px;
  display: inline-block;
  width: 96%;
  margin: auto;
  margin-left: 0px;
}}
</style>