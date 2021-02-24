<template>
  <div class="login">
    <b-row>
      <b-col cols="8" offset="2">
        <b-form
          v-if="mode == 'login'"
          @submit.stop.prevent
          v-model="login"
          style=" padding:10px; margin: 15px"
        >
          <b-row class="login-bg">
            <b-col>
              <h1>Login</h1>
              <div class="text-left mt-5">
                <label for="text-email">E-mail</label>
                <b-form-input
                  type="email"
                  id="text-email"
                  v-model="email"
                  aria-describedby="email-help-block"
                />
                <label for="text-password">Password</label>
                <b-form-input
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                />
              </div>

              <div>
                <div style=" padding: 10px; margin-top: 20px">
                  <b-link href="#">Forgot password? </b-link>
                </div>
              </div>

              <div>
                <b-button
                  block
                  variant="secondary"
                  style=" padding: 15px; margin-top: 15px"
                  >Login</b-button
                >
              </div>

              <div>
                <b-button
                  block
                  variant="secondary"
                  style=" padding: 15px; margin-top: 15px"
                  @click="mode = 'register'"
                  >Create Account</b-button
                >
              </div>
            </b-col>
          </b-row>
        </b-form>
        <b-form
          v-if="mode == 'register'"
          @submit.stop.prevent
          v-model="login"
          style=" padding:10px; margin: 15px"
        >
          <b-row class="login-bg">
            <b-col>
              <h1>Create account</h1>
              <div class="text-left mt-5">
                <label for="text-name">Name</label>
                <b-form-input
                  type="text"
                  id="text-name"
                  v-model="name"
                  aria-describedby="email-help-block"
                />
                <label for="text-email">E-mail</label>
                <b-form-input
                  type="email"
                  id="text-email"
                  v-model="email"
                  aria-describedby="email-help-block"
                />
                <label for="text-password">Password</label>
                <b-form-input
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                />
              </div>

              <div>
                <div style=" padding: 10px; margin-top: 20px">
                  <b-link href="#">Forgot password? </b-link>
                </div>
              </div>
              <div>
                <b-button
                  block
                  variant="secondary"
                  style=" padding: 15px; margin-top: 15px"
                  >Create Account</b-button
                >
              </div>
              <div>
                <b-button
                  block
                  variant="secondary"
                  style=" padding: 15px; margin-top: 15px"
                  @click="mode = 'login'"
                  >Login</b-button
                >
              </div>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        login: '',
        name: '',
        mode: 'login'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .ma {
    align-content: center;
    color: white;
    width: 150px;
    float: right;
    padding: 20px;
  }
  .login-bg {
    margin-top: 25px;
    background-color: rgb(209, 209, 209);
    padding: 20px;
    margin-bottom: 30px;
  }
</style>
