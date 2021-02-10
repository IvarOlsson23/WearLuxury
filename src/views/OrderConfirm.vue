<template>
  <div>
  <div class="OrderConfirm">
    <h1>The order has been processed</h1>
    <p> Tel 0123456789 </p>
    <h2> You will receive your order: </h2>
        <p> Mon 1 March - Thursday 5 March </p>

        <h3> Complete the registration </h3>
        <p> Save your information for future purchases. You only need to add a password. </p>

    <p> E-mail: info@.com </p>

    <p> I have had the opportunity to read and I understand the Privacy and Cookie Policy. </p>

    <h5>Product</h5>
  <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Product image" />


 <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="check-circle" scale="2" variant="success" />
    </b-list-group-item>


 <b-form @submit.stop.prevent>
    <label for="text-password">Password</label>
    <b-form-input type="password" id="text-password" aria-describedby="password-help-block" />
    <b-button variant="dark">Confirm</b-button>
   </b-form>
<b-list-group>
    
   

  <b-container class="bv-example-row">
  <b-row>
    <b-col>Shippmethod</b-col>
    <b-col> Standard delivery to your home. </b-col>
    
  </b-row>
</b-container>


<b-card-group deck>
    <b-card border-variant="dark" header="Delivery address" align="center">
        <b-card-text> Here is info about the customer's delivery address! </b-card-text>
      </b-card>
    </b-card-group>

<b-container class="bv-example-row">
  <b-row>
    <b-col>Paymethod</b-col>
    <b-col>PAYPAL</b-col>
    
  </b-row>
</b-container>

<b-card-group deck>
    <b-card border-variant="dark" header="Contact information" align="center">
        <b-card-text> Here is info about the customer's contact information such as phone number, e-mail, etc.!</b-card-text>
      </b-card>
    </b-card-group>

    <b-card-group deck>
    <b-card border-variant="dark" header="Distribution" align="center">
        <b-card-text> Here is info about the product's price, shipping fee, total price and VAT! </b-card-text>
      </b-card>
    </b-card-group>


    <b-form-rating v-model="rate" variant="warning" class="mb-2" />
    <p class="mt-2">Value: {{ rate }}</p>
    <b-list-group-item class="d-flex justify-content-between align-items-center" />

    <div>
  
  <b-button href="#">Back to Home</b-button>
</div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        rate: 4
      }
    }
  }
</script>