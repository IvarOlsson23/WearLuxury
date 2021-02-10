<template>
<<<<<<< HEAD
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

<script>
export default {
  
};
=======
  <!-- product card -->
  <b-card>
    <img src="../assets/suit.png" alt="suit" />
    <b-card-text class="text-left">
      <h3>{{ product.men.name }}</h3>
      <!-- Color dots -->
      <div id="dots">
        <b-icon icon="circle-fill" variant="success" style="margin: 3px" />
        <b-icon icon="circle-fill" variant="warning" style="margin: 3px" />
        <b-icon icon="circle-fill" variant="danger" style="margin: 3px" />
        <b-icon icon="circle-fill" variant="info" style="margin: 3px" />
      </div>
      <div class="text-right">
        <p>{{ product.men.price }} sek</p>
        <!-- Add to cart button -->
        <b-button pill variant="primary">Add to cart</b-button>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
  export default {
    data() {
      return {
        products: {
          women: {
            '5895af63-e246-42bc-b629-bf607f004da7': {
              name: 'Jacket',
              price: '2900'
            },
            'd6b95aeb-70ef-4a85-97d4-e916a2039cf9': {
              name: 'Bluse',
              price: '1200'
            },
            '94a1304a-8a25-459c-aa9a-e439e25261a9': {
              name: 'Dress',
              price: '2499'
            },
            '9a1a0092-ecd2-4504-a25f-2204c725da0c': {
              name: 'Shose',
              price: '1900'
            }
          },
          men: {
            'f1a0821f-e80b-4939-acb2-b5104bf30aad': {
              name: 'Jacket',
              price: '2900'
            },
            '99f75432-4cf4-4e32-964a-1d4815d94f55': {
              name: 'Shirt',
              price: '1200'
            },
            'f8079e75-a3cf-42b3-90f0-f962d8cd1142': {
              name: 'Pants',
              price: '1900'
            },
            'e53eefe1-6e93-4336-8da0-5a6d699ce98e': {
              name: 'Shose',
              price: '1900'
            }
          }
        }
      }
    }
  }
>>>>>>> d781a6a4a3c1dc76ff0adc854d99c1f2d6841130
</script>

<style scoped>
img {
  max-width: 100%;
}

</style>
