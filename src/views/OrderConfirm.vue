<template>
  <div>
    <div class="order">
      <h1>The order has been processed</h1>

     
  <!-- <b-list-group>
    <b-list-group-item class="d-flex justify-content-between align-items-right">
      <b-icon icon="check-circle" scale="2" variant="success" />
    </b-list-group-item>
  </b-list-group> -->


      
      <h2>You will receive your order:</h2>
      <p>Mon 1 March - Thursday 5 March</p>

      <h3>Complete the registration</h3>
      

      <p>E-mail: info@.com</p>
      <p>Tel 0123456789</p>
      
     
<div>
  <b-form @submit.stop.prevent>
    <label for="text-password">Password</label>
    <b-form-input type="password" id="text-password" aria-describedby="password-help-block"/>
    <b-form-text id="password-help-block">
       Save your information for future purchases. You only need to add a
        password.
    </b-form-text>
   </b-form>
</div>


<b-list-group>
    <b-list-group-item class="d-flex justify-content-between align-items-right">
      <b-icon icon="check-circle" scale="2" variant="success" />
      I have had the opportunity to read and I understand the Privacy and
        Cookie Policy.
    </b-list-group-item>
  </b-list-group>
      
    </div>

    
      

    <b-container class="bv-example-row">
      <b-row>
        <b-col>Shipping Method</b-col>
        <b-col> Standard delivery to your home. </b-col>
      </b-row>
    </b-container>



    <b-card-group deck>
      <b-card border-variant="dark" header="Delivery address" align="center">
        <b-card-text>
          Here is info about the customer's delivery address!
        </b-card-text>
      </b-card>
    </b-card-group>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>Payment Method</b-col>
        <b-col>PAYPAL</b-col>
      </b-row>
    </b-container>

    <b-card-group deck>
      <b-card border-variant="dark" header="Contact information" align="center">
        <b-card-text>
          Here is info about the customer's contact information such as phone
          number, e-mail, etc.!</b-card-text
        >
      </b-card>
    </b-card-group>

    <h5>Product</h5>
      <b-img width="200px" 
        src="https://img01.ztat.net/article/spp-media-p1/5e0b5adffa1338618afdae5031987c3e/0d68e7d30bf0477f93d4d0a7272ae7cc.jpg?imwidth=1800"
        
        fluid alt="Product image"/>

    <b-card-group deck>
      <b-card border-variant="dark" header="Distribution" align="center">
        <b-card-text>
          Here is info about the product's price, shipping fee, total price and
          VAT!
        </b-card-text>
      </b-card>
    </b-card-group>

    <b-form-rating v-model="rate" variant="warning" class="mb-2" />
    <p class="mt-2">Value: {{ rate }}</p>
    <b-list-group-item
      class="d-flex justify-content-between align-items-center"
    />

    <b-button href="/">Back to Home</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rate: null
      }
    }
  }
</script>


<style scoped lang="scss">
  .order {
    text-align: center;
    h2 {
padding: 20px;
  margin: 20px;
    }

    p{
      padding: 10px;
  margin: 10px;
    }
h3 {
  padding: 20px;
  margin: 20px;
}
b-list-group {
  text-align: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
}

h5 {
  padding: 20px;
  margin: 20px;
}


  }
</style>