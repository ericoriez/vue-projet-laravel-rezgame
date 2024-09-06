<template>
    <div>
      <h1>Liste des Items</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.titre }} - {{ item.price }} €</li>
      </ul>
    </div>
  </template>
  <script>
  import { ref, onMounted } from 'vue';
  import { getItems } from '@/api/api'; // Assurez-vous que le chemin est correct
  
  export default {
    name: 'ItemList',
    setup() {
      const items = ref([]);
  
      onMounted(async () => {
        try {
          items.value = await getItems(); // Récupère les items depuis l'API
        } catch (error) {
          console.error('Erreur lors de la récupération des items :', error);
        }
      });
  
      return {
        items,
      };
    },
  };
  </script>

  