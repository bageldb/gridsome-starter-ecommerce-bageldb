<template>
  <div class="sign-wrap">
    <div class="signup">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        class="form"
      >
        <h2 class="smaller-head">Sign up for a newsletter<br /></h2>
        <p class="paragraph">to get no samples at all</p>
        <input
          type="text"
          class="text-field"
          maxlength="256"
          name="name"
          data-name="Name"
          placeholder="Name"
          id="name"
        /><input
          type="email"
          class="text-field"
          maxlength="256"
          name="email"
          data-name="Email"
          placeholder="Email"
          id="email"
          required=""
        /><input
          type="submit"
          value="Submit"
          data-wait="Please wait..."
          class="btn"
        />
      </form>
      <div class="form-done">
        <div>Awesome! You're signed up!</div>
      </div>
      <div class="form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
</template>