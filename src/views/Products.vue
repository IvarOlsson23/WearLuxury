<template>
  <div class="produts">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
        <b-col cols="3" />
        <b-col cols="6" class="textcenter">
          <img src="logo.png" width="150px" />
        </b-col>
        <b-col cols="3">
          <div class="float-right">
            <b-dropdown
              id="dropdown-1"
              text="Sort by"
              class="m-md-2 bg-dark"
              align-v="left"
            >
              <b-dropdown-item>Color</b-dropdown-item>
              <b-dropdown-item>Fabric</b-dropdown-item>
              <b-dropdown-item>Pattern</b-dropdown-item>
              <b-dropdown-divider />
            </b-dropdown>
            <b-dropdown
              id="dropdown-1"
              text="Products"
              class="m-md-2 bg-dark"
              align-v="left"
            >
              <b-dropdown-item>Women clothes</b-dropdown-item>
              <b-dropdown-item>Men clothes</b-dropdown-item>
              <b-dropdown-item>Accessories</b-dropdown-item>
              <b-dropdown-divider />
            </b-dropdown>
          </div>
        </b-col>
      </b-row>

      <div class="dressblack">
        <b-col><img src="blackdress.jpg" width="170px"/></b-col>

        <b-row>999kr</b-row>
      </div>
      <b-row>
        <div class="dressbox">
          <b-col><img src="blackcoat.jpg" width="145px"/></b-col>
        </div>
        <div class="watch bg-light">
          <b-col><img src="watch.jpg" width="170px"/></b-col>
        </div>
        <div class="purse">
          <b-col><img src="purse.jpg" width="170px"/></b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<style>
  .login {
    color: white;
  }
  .menue {
    align-content: center;
    color: white;
    width: 150px;
    float: right;
    padding: 20px;
  }
  .dropdown-1 {
    float: left;
  }
  .dressblack {
    width: 300px;
    height: 200px;
    border: solid 1px rgba(185, 184, 184, 0.747);
    font-style: bold;
  }
  .dressbox {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 50px;
    margin-left: 15px;
  }
  .watch {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 300px;
    height: 250px;
    margin-top: 50px;
    margin-left: 15px;
  }
  .purse {
    border: solid 1px rgba(185, 184, 184, 0.747);
    width: 250px;
    height: 250px;
    margin-top: 50px;
    margin-left: 15px;
  }
</style>
