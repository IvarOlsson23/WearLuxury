<template>
  <div class="mb-4">
    <b-row>
      <b-col cols="12">
        <b-row class="p-5">
          <b-col cols="4">
            <div class="flexbox" style="background-image: url('/social.jpeg');">
              Social responsibility
            </div>
            <p>dfs</p>
          </b-col>
          <b-col cols="4">
            <div class="flexbox" style="background-image: url('/policy.jpg');">
              Our policy
            </div>
          </b-col>
          <b-col cols="4">
            <div class="flexbox" style="background-image: url('/blog.jpg');" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script></script>

<style scoped lang="scss">
  div {
    height: 100vh;
  }
  .flexbox {
    display: grid;
    align-items: center;
    height: 200px;
    background-size: cover;
  }
</style>
