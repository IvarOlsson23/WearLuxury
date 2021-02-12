<template>
  <div id="appp">
    
   <b-container fluid="" id="con" class="bv-example-row">
  
  <b-row align-v="center">
     <b-col lg="2" id="logo"><img alt="wearluxty logo" src="../assets/logo.png" /></b-col>
    <b-col  id="home" lg="1"><router-link to="/">Home</router-link></b-col>
    <b-col id="pro" cols="5"><router-link to="/about">Products</router-link></b-col>
    <b-col  md="auto"><input  type="text" class="sok" placeholder=" Sök"/></b-col>
    <b-col id="aa" lg="1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" id="login" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></b-col>
    <b-col id="korg" col lg="1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-basket2, kop" viewBox="0 0 16 16">
  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
</svg></b-col>

  </b-row>
</b-container>
    
    
  </div>
  
</template>

<style scoope lang="scss">

  #appp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;


  }
#pro{
  text-align: left;
}

#aa{
  text-align: right;
}

 #con {
   background-color: #a8c2ce;
   
 .sok{
   border-radius: 5px;
   
 }

  #logo {
    width: auto;
    padding-left: 0px;
    margin-left:0px ;
    
  }
 a::hover {
       text-decoration: none;
       color: black;
     }
    a {
      font-weight: bold;
      color: #2c3e50;
      color: #000000;
      
  

      &.router-link-exact-active {
        color: #42b983;
        color: #FFF200;
        
      }
    }
  }

  @media screen and (max-width: 1399px)
{
   #korg{
     text-align: right;
    
    }
}

@media screen and (max-width: 960px)

{
   
     #korg{
     text-align: right;
    
    }
}

  @media screen and (max-width: 768px)
  {
    #home{
     text-align: left;
     
    }
     #korg{
     text-align: right;
    
    }
    #logo {
  padding: auto;
  }
  }
 
  </style>