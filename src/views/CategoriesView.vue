<template>
  <div class="categories-items-view">
    <!-- Section des catégories -->
    <div id="redContainer">
      <h1>Liste des Categories</h1>
      <button 
        v-for="categorie in categories" 
        :key="categorie.id"
        @click="fetchItemsByCategory(categorie.id)"
      >
        {{ categorie.name }}
      </button>
    </div>

    <!-- Section des articles -->
    <div class="items-view">
      <h1>Articles par catégorie</h1>
      <div class="card-container">
        <ItemCard v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCategories, getItemsByCategory } from '@/api/api';
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'CategoriesView',
  components: {
    ItemCard
  },
  setup() {
    const categories = ref([]);
    const items = ref([]);

    onMounted(async () => {
      try {
        categories.value = await getCategories();
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    });

    const fetchItemsByCategory = async (categoryId) => {
      try {
        items.value = await getItemsByCategory(categoryId);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };

    return {
      categories,
      items,
      fetchItemsByCategory
    };
  },
};
</script>

<style scoped>
/* Mise en page avec Flexbox pour placer les catégories et les articles côte à côte */
.categories-items-view {
  display: flex;
  width: 100%;
  height: 100%;
}

#redContainer {
  background-color: #a52502;
  width: 30%;
  height: 100vh; /* Prend toute la hauteur de la page */
  padding: 20px;
}

h1 {
  color: white;
  text-align: center;
}

button {
  background-color: white;
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

/* Section des articles */
.items-view {
  width: 70%;
  padding: 20px;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>