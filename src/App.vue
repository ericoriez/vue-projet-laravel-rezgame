<template>
  <header>
    <div class="wrapper">
      <nav>
        <img src="@/assets/img/Logo.png" alt="Logo" class="logo" />
        <input id="inputSearch" type="text" placeholder="Search">
      </nav>
      <RouterLink to="/" class="elementNav">Home</RouterLink>
      <RouterLink to="/categorie" class="elementNav">Categories</RouterLink>
      <RouterLink to="/about" class="elementNav">About</RouterLink>
    </div>
  </header>

  <body>

    <main>
      <div id="containerMain">
        <RouterView /> <!-- Affiche le contenu des routes (ex: HomeView) -->
      </div>
    </main>

  </body>
  <footer>

    <div id="containerFooter">
      <div id="containerFooterContact">
        <h2>Contact</h2>
        <p>Tel: 04503666..</p>
        <a href="" id="mail">Mail: rezGame@gmail.com</a>
        <p>F.A.Q</p>
      </div>
      <div id="containerFooterAPropos">
        <h2>A Propos</h2>
        <p id="pFooter">Rez'Game est né de l'idée de rendre les jeux vidéo plus accessibles à tous, tout en donnant une seconde vie
          aux jeux que vous avez adorés. Nous sommes une équipe de passionnés de jeux vidéo, dédiée à fournir une
          expérience de shopping en ligne simple, rapide et sécurisée. Que vous soyez un amateur de jeux rétro ou à la
          recherche des dernières sorties, notre catalogue varié saura satisfaire toutes vos envies.</p>
          <a id="lienFooter" href="https://www.linkedin.com/in/eric-oriez/" target="_blank">Créer par Eric Oriez en 2024</a>
      </div>
      <div id="containerFooterReseaux">
        <h2>Réseaux</h2>
        <img src="./assets/img/logoReseaux/logos_facebook.png" alt="">
        <img src="./assets/img/logoReseaux/mage_tiktok-circle.png" alt="" id="tiktok">
        <img src="./assets/img/logoReseaux/skill-icons_discord.png" alt="">
        <img src="./assets/img/logoReseaux/skill-icons_instagram.png" alt="">
      </div>
    </div>

  </footer>
</template>

<style scoped>
.wrapper {

  background-color: #383345;

}

nav {

  text-align: center;
  font-size: 2rem;
  padding: 1rem 0;

  position: relative;
}

.elementNav {
  text-decoration: none;
  margin: 20px;
  color: white;
  font-size: 25px;
}

#inputSearch {
  position: absolute;
  right: 20%;
  top: 50%;
  width: 20%;
  height: 30px;
  border-radius: 15px;
  border-style: none;

}

#containerMain {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}


/* ****************************************FOOTER ******************************************************* */


footer {
  width: 100%;

}
h2{
  color: white;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
#containerFooter{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #383345;
  
}
#containerFooterContact{
  color: white;
}

#mail{
  text-decoration: none;
  color: white;
}
#containerFooterAPropos{
  color: white;
  width: 40%;
  
}

#pFooter{
  margin: 15px 0;
}

#lienFooter {
  color: red;
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin:10px;
}
#tiktok{
  background-color: white;
  border-radius: 15px;
}
img{
  margin-left: 10px;
}
</style>
