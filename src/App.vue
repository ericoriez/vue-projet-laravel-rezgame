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
  
    <RouterView /> <!-- Affiche le contenu des routes (ex: HomeView) -->
    
  </body>
  <footer>
 
    <a id="lienFooter" href="https://www.linkedin.com/in/eric-oriez/" target="_blank">Créer par Eric Oriez en 2024</a>

  </footer>
</template>

<style scoped>

.wrapper{

  background-color:#383345;
}

nav {
 
  text-align: center;
    font-size: 2rem;
    padding: 1rem 0;
    position: relative;
}
.elementNav{
  text-decoration: none;
  margin: 5px;
  color: white;
}

#inputSearch{
  position: absolute;
  right: 20%;
  top: 50%;
  width: 20%;
  height: 30px;
  border-radius: 15px;
  border-style: none;
  
}

footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}

#lienFooter{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#383345;
  height: 150px;
  color: aliceblue;

}

</style>
