<template>
  <div class="login">
    <b-row class="vh-100 text-center">
      <b-col>
        <h1>Login</h1>
        <div>
          <b-form
            @submit.stop.prevent
            style="max-width: 540px; padding:10px; margin: 15px"
          >
            <label for="text-email">E-mail</label>
            <b-form-input
              type="email"
              id="text-email"
              aria-describedby="email-help-block"
            />
          </b-form>

          <b-form
            @submit.stop.prevent
            style="max-width: 540px; padding: 10px; margin: 15px"
          >
            <label for="text-password">Password</label>
            <b-form-input
              type="password"
              id="text-password"
              aria-describedby="password-help-block"
            />
          </b-form>
        </div>

        <div>
          <b-form-checkbox
            style="max-width: 540px; padding: 10px; margin-left: -100px"
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Remember me
          </b-form-checkbox>

          <div style="max-width: 540px; padding: 10px; margin-left: 200px">
            <b-link
              
              href="#" 
              >Forgot password?
            </b-link>
          </div>
        </div>

        <div>
          <b-button
            block
            variant="secondary"
            style="max-width: 540px; padding: 15px; margin: 15px"
            >Login</b-button
          >
        </div>

        <div>
          <b-button
            block
            variant="secondary"
            style="max-width: 540px; padding: 15px; margin: 15px"
            >Create Account</b-button
          >
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style>
  .ma {
    align-content: center;
    color: white;
    width: 150px;
    float: right;
    padding: 20px;
  }
  .vh-100 {
    height: 100vh;
    margin-top: 25px;
    background-color: rgb(175, 175, 175);
    margin-right: 20px;
    margin-left: 20px;
    padding-top: 20px;
    margin-bottom: 30px;
    
  }
</style>
