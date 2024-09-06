<template>
  <div class="items-view">
    <h1>Nos Articles</h1>
    <div class="card-container">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getItems } from '@/api/api';
import ItemCard from '@/components/ItemCard.vue';

export default {
  components: {
    ItemCard,
  },
  setup() {
    const items = ref([]);

    onMounted(async () => {
      try {
        items.value = await getItems(); // Appel à l'API pour récupérer les items
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

<style scoped>
.items-view {
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

