<template>
  <div>
    <header>
      <router-link to="/" class="headerText">Главная страница</router-link>
      <router-link to="/checkout">
        <div class="bucketImageContainer">
          <img class="bucketImg" src='https://digicollect.com/assets/images/icons/basket-ori.png'>
          <div class="number">
              {{ $store.getters.totalItemsInThrasher }}
          </div>
        </div>
      </router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  justify-items: center;
  align-items: center;
  z-index: 1;
}
.headerText {
  text-decoration: none; color: navy;
}
.bucketImg {
  width: 60px;
  height: 60px;
}
.bucketImageContainer{
  position: relative;
}
.number {
  position: absolute;
  min-width: 1em;
  height: 1em;
  background-color: #a366ff;
  color: #fff;
  top: 30px;
  left: 5px;
  padding: 0.3em;
  border-radius: 1em;
  align-self: end;
  text-align: center;
  font-weight: 600;
  font-family: 'Avant Garde', sans-serif;
}
</style>
