<template>
  <img
    :src="image.imageURL"
    :sizes="sizes"
    :srcset="srcset"
    :alt="alt || image.altText"
  />
</template>

<script>
export default {
  name: "bgl-image",
  props: { image: [Object], alt: String },
  data() {
    return {
      sizes: [480, 768, 991, 1200],
    };
  },
  computed: {
    sizes() {
      return this.sizes.map((s) => `(max-width: ${s - 1}px) ${s}px`).join(",");
    },
    srcset() {
      return this.sizes
        .map((s) => `${this.image.imageURL}&resize=${s} ${s}w`)
        .join(",");
    },
  },
};
</script>