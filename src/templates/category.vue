<template>
  <Layout>
    <div class="cat-hero">
      <div class="_1200 top">
        <h1 class="heading smaller center">
          {{ $page.category.categoryName }}
        </h1>
      </div>
    </div>
    <div>
      <div class="cat">
        <div class="items-wrap">
          <product
            v-for="edge in $page.products.edges"
            :key="edge.node._id"
            :product="edge.node"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID! $categoryName:String) {
    category:categories(id: $id) {
      _id
    categoryName
  }
    products:allProducts(filter:{categories:{item:{categoryName:{eq:$categoryName}}}}){
    	edges{
        node{
          title
          image{
            imageURL
            altText
          }
          price
          slug
        }
      }
  }
}
</page-query>

<script>
import product from "../components/product-card";
export default {
  components: { product },
};
</script>