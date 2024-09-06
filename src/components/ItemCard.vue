<template>
    <div class="card">
      <img src="https://global-img.gamergen.com/the-legend-of-zelda-breath-of-the-wild-jaquette_0320051000855326.jpg" alt="Image de l'article" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ item.titre }}</h5>
        <p class="card-text">{{ item.price }} €</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 12rem;
    border-radius: 5px;
    overflow: hidden;
    margin: 15px;
    background-color: #383345;
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
    color: aliceblue;
  }
  
  .card-body {
    padding: 15px;
    
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
  }
  
  .card-text {
    font-size: 1rem;
    color: white;
  }
  </style>