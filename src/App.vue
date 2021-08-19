<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">


//Fonts
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #283044;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #42b983;
    border-radius: 50px;
  }
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  a{
  text-decoration: none;
  color: initial;
  &:hover{
    text-decoration: none;
    color: initial;
  }

}
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
