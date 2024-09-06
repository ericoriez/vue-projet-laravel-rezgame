<template>
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getUsers } from '@/api/api'; // Importer la fonction API
  
  export default {
    name: 'UserList',
    setup() {
      const users = ref([]);
  
      onMounted(async () => {
        try {
          users.value = await getUsers();
        } catch (error) {
          console.error('Erreur lors de la récupération des utilisateurs :', error);
        }
      });
  
      return {
        users,
      };
    },
  };
  </script>