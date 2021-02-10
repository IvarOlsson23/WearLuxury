<template>
<div class="produts">
    <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row class="menue" align-v="end bg-dark">
    <b-col>Menue</b-col>
  </b-row><b-row class="login" align-v="center bg-dark">
    <b-col offset="1">Login</b-col>
  </b-row>
<b-dropdown id="dropdown-1" text="Sort by" class="m-md-2 bg-dark" align-v="left">
    <b-dropdown-item>Color</b-dropdown-item>
    <b-dropdown-item>Fabric</b-dropdown-item>
    <b-dropdown-item>Pattern</b-dropdown-item>
    <b-dropdown-divider/>
  </b-dropdown>
  
  <b-row align-v="left">
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
  </b-row>


  <b-row align-v="baseline">
    <b-col style="font-size: 0.75rem;">One of three columns</b-col>
    <b-col>One of three columns</b-col>
    <b-col style="font-size: 1.25rem;">One of three columns</b-col>
  </b-row>

 
</b-container>
</div>
</template>

<style>
  .login {
    color: white;
    width: 200px;
    padding: 10px;
  }
  .menue {
    align-content: center;
    color: white;
    width: 150px;
    float: right;
    padding: 20px;
}
.dropdown-1{
    float: left;
 
}

</style>
