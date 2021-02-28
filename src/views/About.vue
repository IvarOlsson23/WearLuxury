<template>
  <b-row>
    <div
      class="about"
      :style="'background-image:url(' + require('../assets/about.jpg') + ')'"
    />
    <b-col cols="12">
      <b-row class="p-5">
        <b-col cols="4">
          <b-card style="width: 100%; padding:0px;" class="mb-2">
            <div
              class="flexbox"
              :style="
                'background-image:url(' +
                  require('../assets/social.jpeg') +
                  '); height:200px; background-size:cover; '
              "
            >
              <span>Socila responsibility</span>
            </div>

            <b-card-text>
              <p class="text">
                <strong>Wear Luxury</strong> strives to have a positive
                <br />impact not only within our stores and corporate family,
                but also upon the<br />
                environment and on the hundreds of vendor manufacturing
                facilities<br />
                throughout the world and their employees.
              </p>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="4">
          <b-card style="width: 100%; padding:0px;" class="mb-2">
            <div
              class="flexbox"
              :style="
                'background-image:url(' +
                  require('../assets/policy.jpg') +
                  '); height:200px; background-size:cover; '
              "
            >
              <span>Privacy policy</span>
            </div>

            <b-card-text>
              <p class="text">
                <strong>our main goals</strong> are to gain and maintain your
                trust,
              </p>
              <p class="text">
                including by addressing any questions or concerns you might have
                about the privacy and
              </p>
              <p class="text">
                safety of yourpersonal information when it is in our hands. In
                this regard,
              </p>
              we have partnered with One Trust, a leading technology platform,
              to allow us to better communicate with you and to respond to your
              requests more efficiently.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="4">
          <b-card style="width: 100%; padding:0px;" class="mb-2">
            <div
              class="flexbox"
              :style="
                'background-image:url(' +
                  require('../assets/contact-us.jpg') +
                  '); height:200px; background-size:cover; '
              "
            >
              <span>Contact us</span>
            </div>

            <b-card-text>
              <h6 style="margin-top:10px; text-decoration:underline;">
                Questions?
              </h6>
              <br />
              <p>
                If you have any questions regarding shipping, payment, etc
                contact us right here in the form.
              </p>
            </b-card-text>
            <form>
              <div class="mb-3" style="text-align:left;">
                <label for="exampleInputName" class="form-label">Name</label>
                <input
                  type="Name"
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="Name"
                />
                <div id="Name" class="form-text" />
              </div>
              <div class="mb-3" style="text-align:left;">
                <label for="exampleInputEmail1" class="form-label"
                  >E-mail</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text" />
              </div>
              <div>
                <b-form-textarea
                  id="textarea-rows"
                  placeholder="Enter text"
                  rows="8"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                style="margin-top:20px; width:250px"
              >
                Submit
              </button>
            </form>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .flexbox {
    display: grid;
    align-items: center;
    height: 200px;
    background-size: cover;
    font-size: 24px;
  }
  .text {
    font-size: 15px;
  }
  .text-container {
    border: solid 1px rgb(172, 172, 172);
  }
  .text-container p {
    margin-bottom: 3px;
  }
  .about {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
  }
  .card-body {
    padding: 0px;
  }
  .card {
    border: 0px;
  }
  .card-img {
    border-radius: 0px;
  }
  .text {
    padding: 10px 3px;
    font-size: 16px;
    text-align: left;
  }
  .flexbox span {
    background-color: #000;
    color: #fff;
    opacity: 0.7;
    padding: 10px;
  }
</style>
