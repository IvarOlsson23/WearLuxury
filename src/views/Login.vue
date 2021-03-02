<template>
  <div class="login">
    <b-row class="d-flex justify-content-center">
      <b-col sm="12" md="6">
        <b-form
          v-if="mode == 'login'"
          @submit.stop.prevent
          v-model="login"
          style=" padding:10px; margin: 15px"
        >
          <!-- Login -->

          <b-row class="login-bg" style="">
            <b-col>
              <h1>Login</h1>
              <div class="text-left mt-5">
                <label style=" padding: 10px; margin-top: 10px" for="text-email"
                  >E-mail</label
                >
                <b-form-input
                  required
                  type="email"
                  id="text-email"
                  v-model="email"
                  aria-describedby="email-help-block"
                />
                <label
                  style=" padding: 10px; margin-top: 10px"
                  for="text-password"
                  >Password</label
                >
                <b-form-input
                  required
                  type="password"
                  id="text-password"
                  v-model="password"
                  aria-describedby="password-help-block"
                />
              </div>

              <!-- Forgot password -->

              <div>
                <div
                  class="mt-3"
                  v-b-modal.modal-prevent-closing
                  style=" padding: 10px; margin-top: 20px"
                >
                  Forgot password?
                  <div v-if="submittedForgot.length === 0" />
                  <ul v-else class="mb-0 pl-3">
                    <li v-for="forgot in submittedForgot" :key="forgot">
                      {{ forgot }}
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <b-button
                  @click="doLogin"
                  type="submit"
                  block
                  variant="secondary"
                  style=" padding: 15px; margin-top: 15px"
                  >Login</b-button
                >
              </div>

              <!-- Create account -->

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
                  required
                  type="text"
                  id="text-name"
                  v-model="name"
                  aria-describedby="email-help-block"
                />
                <label style=" padding: 10px; margin-top: 10px" for="text-email"
                  >E-mail</label
                >
                <b-form-input
                  required
                  type="email"
                  id="text-email"
                  v-model="email"
                  aria-describedby="email-help-block"
                />

                <label
                  style=" padding: 10px; margin-top: 10px"
                  for="text-password"
                  >Password</label
                >
                <b-form-input
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                />

                <label
                  style=" padding: 10px; margin-top: 10px"
                  for="text-password"
                  >Repeat Password</label
                >
                <b-form-input
                  v-model="password"
                  required
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                />
              </div>

              <!-- Forgot password -->

              <div>
                <div
                  class="mt-3"
                  v-b-modal.modal-prevent-closing
                  style=" padding: 10px; margin-top: 20px"
                >
                  Forgot password?
                  <div v-if="submittedForgot.length === 0" />
                  <ul v-else class="mb-0 pl-3">
                    <li v-for="forgot in submittedForgot" :key="forgot">
                      {{ forgot }}
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <b-button
                  block
                  variant="secondary"
                  style=" padding: 15px; margin-top: 15px"
                  @click="doregister"
                  type="submit"
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
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Forgotten password?"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Enter your E-mail"
          label-for="forgot-input"
          invalid-feedback="E-mail is correct"
          :state="forgotState"
        >
          <b-form-input
            id="forgot-input"
            v-model="forgot"
            :state="forgotState"
            required
          />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<!-- Script -->

<script>
  export default {
    data() {
      return {
        email: '',
        forgot: '',
        login: '',
        name: '',
        password: '',
        repeatpassword: '',
        mode: 'login',
        forgotState: null,
        submittedForgot: ''
      }
    },
    methods: {
      doLogin() {
        if (this.email != '' && this.password != '') {
          this.redirect()
        }
      },
      doregister() {
        if (
          this.email != '' &&
          this.repeatpassword != '' &&
          this.password != '' &&
          this.name != ''
        ) {
          this.redirect()
        }
      },
      redirect() {
        this.$router.push({ name: 'profil' })
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.forgotState = valid
        return valid
      },
      resetModal() {
        this.email = ''
        this.forgotState = null
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()

        this.handleSubmit()
      },
      handleSubmit() {
        if (!this.checkFormValidity()) {
          return
        }

        this.submittedEmail.push(this.email)

        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>

<!-- Style -->

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
    padding: 40px;
    margin-bottom: 30px;
  }
  .login {
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
