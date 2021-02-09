<template>
 <!-- product card -->
        <b-card class="text-left" >
          <img src="../assets/suit.png" alt="suit" />
          <b-card-text>
            <h3>Product</h3>
            <p>info about product</p>
            
            <!-- Color dots -->
            <div id="dots">
              <b-icon icon="circle-fill" variant="success" style="margin: 3px" />
              <b-icon icon="circle-fill" variant="warning" style="margin: 3px" />
              <b-icon icon="circle-fill" variant="danger" style="margin: 3px" />
              <b-icon icon="circle-fill" variant="info" style="margin: 3px" />
            </div>
            <div class="text-right">
            <p>2900 sek</p>
            <!-- Add to cart button -->
            <b-button  pill variant="primary"  >Add to cart</b-button>
             </div>
          </b-card-text>
        </b-card>
    
 
</template>


<style scoped>
img {
  max-width: 100%;
}

</style>
