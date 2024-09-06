<template>
    <div id="redContainer">
      <h1>Liste des Categories</h1>
      <!-- <ul>
        <li v-for="categorie in categories" :key="categorie.id"><a href="">{{ categorie.name }}</a></li>
      </ul> -->

      <button v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getCategories } from '@/api/api'; // Assurez-vous que ce chemin est correct
  
  export default {
    name: 'CategoriesView',
    setup() {
      const categories = ref([]);
  
      // Récupérer les items lors du montage du composant
      onMounted(async () => {
        try {
          categories.value = await getCategories(); // Appel à l'API pour récupérer les categories
        } catch (error) {
          console.error('Erreur lors de la récupération des categories :', error);
        }
      });
  
      return {
        categories,
      };
    },
  };
  </script>

<style>
#redContainer{
  background-color: #A52502;
  position: absolute;
  width: 30%;
  height: 100%;
}

h1{
  display: flex;
  justify-content: center;
  margin: 20px 0;
  color: white;

}
ul{
 
}
button{
  background-color: white;
  width: 70%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  
}

/* a{
  text-decoration: none;
  color: black;
} */


</style>