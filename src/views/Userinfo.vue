<template>
  <div id="con">
    <div id="xcon">
      <div id="you">Your Informations</div>

      <b-container>
        <b-row>
          <b-col id="name">
            <div class="inline">Username:</div>
            <div class="inline">{{ username }}</div>
          </b-col>
          <b-col id="ico">
            <b-button v-b-modal.username-modal size="sm" variant="light"
              ><b-icon class="ml-2" icon="box-arrow-in-down-left" />
            </b-button>
            <b-modal id="username-modal" title="Change Username" @ok="name">
              <form ref="form">
                <b-form-group label="Username" label-for="username-input">
                  <b-form-input id="username-input" v-model="username" />
                </b-form-group>
              </form>
            </b-modal>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="inline">Password:</div>
            <div class="inline">
              &bull;&bull;&bull;&bull;&bull;&bull;
            </div>
          </b-col>
          <b-col>
            <b-button v-b-modal.password-modal size="sm" variant="light"
              ><b-icon class="ml-2" icon="box-arrow-in-down-left" />
            </b-button>
            <b-modal id="password-modal" title="Change password" @ok="Password">
              <form ref="form">
                <b-form-group label="Password" label-for="password-input">
                  <b-form-input
                    type="password"
                    id="password-input"
                    v-model="password"
                  />
                </b-form-group>
              </form>
            </b-modal>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="inline">Phone:</div>
            <div class="inline">{{ phone }}</div>
          </b-col>
          <b-col>
            <b-button v-b-modal.phone-modal size="sm" variant="light"
              ><b-icon class="ml-2" icon="box-arrow-in-down-left"
            /></b-button>
            <b-modal id="phone-modal" title="Change phone" @ok="Phone">
              <form ref="form">
                <b-form-group label="Phone" label-for="phone-input">
                  <b-form-input
                    type="number"
                    id="phone-input"
                    v-model="phone"
                  />
                </b-form-group>
              </form>
            </b-modal>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="inline">Email:</div>

            <div class="inline">{{ email }}</div>
          </b-col>
          <b-col>
            <b-button v-b-modal.email-modal size="sm" variant="light"
              ><b-icon class="ml-2" icon="box-arrow-in-down-left"
            /></b-button>
            <b-modal id="email-modal" title="Change email" @ok="Email">
              <form ref="form">
                <b-form-group label="Email" label-for="email-input">
                  <b-form-input type="email" id="email-input" v-model="email" />
                </b-form-group>
              </form>
            </b-modal>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="inline">Zip-code:</div>

            <div class="inline">{{ zip }}</div>
          </b-col>
          <b-col>
            <b-button v-b-modal.zip-modal size="sm" variant="light"
              ><b-icon class="ml-2" icon="box-arrow-in-down-left"
            /></b-button>
            <b-modal id="zip-modal" title="Change Zip-code" @ok="Email">
              <form ref="form">
                <b-form-group label="Zip-code" label-for="zip-input">
                  <b-form-input type="text" id="zip-input" v-model="zip" />
                </b-form-group>
              </form>
            </b-modal>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="inline">Country:</div>

            <div class="inline">{{ country }}</div>
          </b-col>
          <b-col>
            <b-button v-b-modal.country-modal size="sm" variant="light"
              ><b-icon class="ml-2" icon="box-arrow-in-down-left"
            /></b-button>
            <b-modal id="country-modal" title="Change country" @ok="Country">
              <form ref="form">
                <b-form-group label="Country" label-for="Country-input">
                  <b-form-input
                    type="text"
                    id="country-input"
                    v-model="country"
                  />
                </b-form-group>
              </form>
            </b-modal>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="inline">Delivery adress:</div>

            <div class="inline">{{ adress }}</div>
          </b-col>
          <b-col>
            <b-button v-b-modal.adress-modal size="sm" variant="light"
              ><b-icon class="ml-2" icon="box-arrow-in-down-left"
            /></b-button>
            <b-modal
              id="adress-modal"
              title="Change delivery adress"
              @ok="Adress"
            >
              <form ref="form">
                <b-form-group label="Adress" label-for="Adress-input">
                  <b-form-input
                    type="text"
                    id="Adress-input"
                    v-model="adress"
                  />
                </b-form-group>
              </form>
            </b-modal>
          </b-col>
        </b-row>
      </b-container>

      <b-modal id="confirm-username">
        <p class="my-4">Username changed!</p>
      </b-modal>
      <b-modal id="confirm-password">
        <p class="my-4">Password changed!</p>
      </b-modal>
      <b-modal id="confirm-email">
        <p class="my-4">Email changed!</p>
      </b-modal>
      <b-modal id="confirm-phone">
        <p class="my-4">PhoneNumber changed!</p>
      </b-modal>
      <b-modal id="confirm-zip">
        <p class="my-4">Zip-code changed!</p>
      </b-modal>
      <b-modal id="confirm-country">
        <p class="my-4">Your country has changed!</p>
      </b-modal>
      <b-modal id="confirm-adress">
        <p class="my-4">Your delivery adress has changed!</p>
      </b-modal>
      <b-button id="logut" variant="danger" @click="logout">Log out</b-button>
    </div>
  </div>
</template>
<style scoped>
  #con {
    width: 40%;
    margin: auto;
  }
  #ico {
    width: 25%;
  }
  #name {
    width: 75%;
  }

  #xcon {
    margin-top: 30px;
  }

  #logut {
    margin-bottom: 10px;
  }
  .inline {
    display: inline-block;
    margin-bottom: 30px;
  }

  #you {
    font-size: 24px;
    padding-bottom: 30px;
  }
</style>
<script>
  export default {
    name: 'Userinfo',

    data() {
      return {
        currentUser: null,
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password'),
        phone: localStorage.getItem('phone'),
        email: null,
        zip: null,
        country: null,
        adress: null
      }
    },
    created() {
      for (let i = 0; i < this.$store.state.users.length; i++) {
        if (this.username === this.$store.state.users[i].username) {
          this.currentUser = this.$store.state.users[i]
          this.email = this.currentUser.email
          this.phone = this.currentUser.phone
          this.zip = this.currentUser.zip
          this.country = this.currentUser.country
          this.adress = this.currentUser.adress
        }
      }
    },

    methods: {
      logout() {
        localStorage.setItem('username', '')
        localStorage.setItem('password', '')
        localStorage.setItem('email', '')
        localStorage.setItem('phone', '')
        localStorage.setItem('zip', '')
        localStorage.setItem('country', '')
        localStorage.setItem('adress', '')
        this.$router.push('/login')
      },

      name() {
        console.log('submit')
        console.log(this.username)
        localStorage.setItem('username', this.username)
        this.$bvModal.show('confirm-username')
        this.$store.commit('changeUsername', {
          id: this.currentUser.id,
          username: this.username
        })
      },
      Password() {
        console.log(this.password)
        localStorage.setItem('password', this.password)
        this.$bvModal.show('confirm-password')
        this.$store.commit('changePassword', {
          id: this.currentUser.id,
          password: this.password
        })
      },
      Phone() {
        localStorage.setItem('phone', this.phone)
        this.$bvModal.show('confirm-phone')
        this.$store.commit('changePhone', {
          id: this.currentUser.id,
          phone: this.phone
        })
      },

      Email() {
        localStorage.setItem('email', this.email)
        this.$bvModal.show('confirm-email')
        this.$store.commit('changeEmail', {
          id: this.currentUser.id,
          email: this.email
        })
      },
      
      Zip() {
        localStorage.setItem('zip', this.zip)
        this.$bvModal.show('confirm-zip')
        this.$store.commit('changeZip', {
          id: this.currentUser.id,
          zip: this.zip
        })
      },
      Country() {
        localStorage.setItem('country', this.country)
        this.$bvModal.show('confirm-country')
        this.$store.commit('changecountry', {
          id: this.currentUser.id,
          country: this.country
        })
      },

      Adress() {
        localStorage.setItem('adress', this.adress)
        this.$bvModal.show('confirm-adress')
        this.$store.commit('changeadress', {
          id: this.currentUser.id,
          adress: this.adress
        })
      }
    }
  }
</script>
