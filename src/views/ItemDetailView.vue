<template>
    <div v-if="item">
        <h1>{{ item.titre }}</h1>
        <div id="containerArticle">
            <div id="containerArticleText">
                <p>{{ item.description }}</p>
                <p id="pPrice">{{ item.price }} €</p>
                <button id="btnAjouterPanier">Ajouter au panier</button>
            </div>
            <div id="containerArticleImg">
                <img :src="item.image || 'https://global-img.gamergen.com/the-legend-of-zelda-breath-of-the-wild-jaquette_0320051000855326.jpg'"
                    alt="Image de l'article" />
            </div>
        </div>
    </div>
    <div v-else>
        <p>Chargement de l'article...</p>
    </div>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getItem } from '@/api/api'; 

export default {
    setup() {
        const route = useRoute(); 
        const item = ref(null);

        onMounted(async () => {
            try {
                const itemId = route.params.id; 
                item.value = await getItem(itemId);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'article :', error);
            }
        });

        return {
            item,
        };
    },
};
</script>

<style scoped>
img {
    width: 100%;
    max-width: 400px;
    height: auto;
}

h1 {
    color: black;
    display: flex;
    justify-content: center;
    margin: 15px;
}

#containerArticle {
    display: flex;
    flex-direction: row-reverse;


}

#containerArticleText {
    margin: 5rem;
    width: 50%;
}

p {
    width: 50%;
    margin: 25px;
    font-size: 25px;
}

#pPrice {
    color: rgb(131, 197, 33);
}

#btnAjouterPanier {
    border-radius: 15px;
    border: none;
    background-color: greenyellow;
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.5);
    width: 20%;
    height: 30px;

}

#btnAjouterPanier:hover {
    background-color: rgba(170, 245, 57, 0.315);
    border: 2px solid green;
    box-shadow: none;
}
</style>