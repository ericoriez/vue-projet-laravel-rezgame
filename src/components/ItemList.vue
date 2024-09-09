<template>
  <div v-if="items.length > 0">
    <h2>Articles de la catégorie sélectionnée</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.titre }} - {{ item.price }} €
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Sélectionnez une catégorie pour afficher les articles.</p>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>

  