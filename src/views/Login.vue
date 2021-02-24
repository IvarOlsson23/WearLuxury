<template>
  <div class="login">
    <b-row class="vh-100">
      <b-col cols="8" offset="2">
        <h1>Login</h1>
        <p>
          Get 20% off on your first purchase by becoming a member
        </p>
        <b-row>
          <b-col cols="col-md-8 col-sm-12" offset="2">
            <b-form
              class="email"
              @submit.stop.prevent
              style="max-width: 540px; padding:0px; margin:0px"
            >
              <label for="text-email">E-mail</label>
              <b-form-input
                type="email"
                id="text-email"
                aria-describedby="email-help-block"
              />
            </b-form>
            <b-form
              class="password"
              @submit.stop.prevent
              style="max-width: 540px; padding: 0px; margin: 0px"
            >
              <label for="text-password">Password</label>
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
              />
            </b-form>
          </b-col>
        </b-row>

        <div>
          <b-row>
            <b-col cols="col-md-4 col-sm-12">
              <b-form-checkbox
                style="max-width: 520px; padding: 0px; margin-top: 10px"
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Remember me

                <b-link
                  class="forgot"
                  style="max-width: 520px; padding:0px"
                  href="#"
                  >Forgot password?
                </b-link>
              </b-form-checkbox>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col cols="col-md-8 col-sm-12" offset="2">
            <div>
              <b-button
                block
                variant="secondary"
                style="max-width: 500px; padding: 15px; margin-bottom: 15px"
                >Login</b-button
              >
            </div>

            <div>
              <b-button
                block
                variant="secondary"
                style="max-width: 500px; padding: 15px; margin: 0px"
                >Create Account</b-button
              >
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newpassword: ''
      }
    },
    methods: {
      getnewpassword() {
        if (this.newpassword != null) {
          this.newpassword.style.display = 'none'
        } else {
          this.newpassword.style.display = 'block'
        }
      }
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
    background-color: rgb(209, 209, 209);
    margin-right: 40px !important;
    margin-left: 40px !important;
    padding-top: 20px;
    margin-bottom: 30px;
  }
  .forgot {
    margin-left: 30px !important;
    margin-top: 20px;
  }
  .email {
    text-align: left;
    margin-top: 40px !important;
  }
  .password {
    text-align: left;
    margin-top: 40px !important;
  }
</style>
