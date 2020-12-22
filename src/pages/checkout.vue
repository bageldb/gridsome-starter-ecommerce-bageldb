<template>
  <Layout>
    <div v-if="!orderStatus">
      <div>
        <h1>Your Cart</h1>
        <div class="cart-item" v-for="(item, i) in distinctCartItems" :key="i">
          {{ item.title }}
          {{ item.amount }}
          {{ item.price }}
        </div>
      </div>
      <form @submit.prevent="submitCheckout">
        <label>
          Name
          <input type="name" v-model="order.name" />
        </label>
        <label>
          Email
          <input type="email" v-model="order.email" />
        </label>
        <label>
          Address
          <textarea v-model="order.address"> </textarea>
        </label>
        <input type="submit" value="Send Order" />
      </form>
    </div>
    <div v-if="orderStatus == 'Completed'">
      Awesome! good things are coming!!
    </div>
  </Layout>
</template>

<script>
import Bagel from "@bageldb/bagel-db";
const postDB = new Bagel(process.env.GRIDSOME_POST_TOKEN);
import { mapGetters } from "vuex";
export default {
  name: "checkout",
  data() {
    return {
      orderStatus: null,
      order: {
        name: "",
        email: "",
        address: "",
      },
    };
  },
  methods: {
    async submitCheckout() {
      let order = this.order;
      let { data } = await postDB.collection("orders").post(order);
      let items = this.distinctCartItems.map((item) => {
        return {
          product: [{ itemRefID: item._id }],
          amount: item.amount,
          price: item.price,
          productTitle: item.title,
        };
      });
      for (const item of items) {
        await postDB
          .collection("orders")
          .item(data.id)
          .collection("products")
          .post(item);
      }
      this.orderStatus = "Completed";
    },
  },
  computed: {
    ...mapGetters(["distinctCartItems", "cartItems", "total"]),
  },
};
</script>