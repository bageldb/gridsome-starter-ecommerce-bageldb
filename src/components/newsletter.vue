<template>
  <div class="sign-wrap">
    <div class="signup">
      <form
        v-if="!success"
        id="email-form"
        name="email-form"
        class="form"
        @submit.prevent="submitNewsletter"
      >
        <h2 class="smaller-head">Sign up for a newsletter<br /></h2>
        <p class="paragraph">to get no samples at all</p>
        <input
          type="text"
          class="text-field"
          maxlength="256"
          name="name"
          v-model="signUp.name"
          placeholder="Name"
          required
        /><input
          type="email"
          class="text-field"
          maxlength="256"
          name="email"
          v-model="signUp.email"
          placeholder="Email"
          required
        /><input
          type="submit"
          value="Submit"
          data-wait="Please wait..."
          class="btn"
        />
      </form>
      <div class="form-done" v-if="success">
        <div>Awesome! You're signed up!</div>
      </div>
      <div class="form-fail" v-if="error">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
</template>


<script>
// Has access to POST only to Newsletter Signups nad Orders
import Bagel from "@bageldb/bagel-db";
const postDB = new Bagel(process.env.GRIDSOME_POST_TOKEN);
export default {
  name: "newsletter",
  data() {
    return {
      success: false,
      error: false,
      signUp: { name: "", email: "" },
    };
  },
  methods: {
    async submitNewsletter() {
      try {
        await postDB.collection("newsletterSignups").post(this.signUp);
        this.success = true;
      } catch (err) {
        console.log(err);
        this.error = true;
      }
    },
  },
};
</script>