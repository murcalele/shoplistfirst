<template>
  <div>
    <header>
      <router-link to="/" class="headerText">Главная страница</router-link>
      <router-link to="/checkout">
        <div class="bucketImageContainer">
          <img class="bucketImg" src='https://digicollect.com/assets/images/icons/basket-ori.png'>
          <div class="number">
            Goods
          </div>
        </div>
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #D8DDEF;
  filter: drop-shadow(0px 0.2rem 0.2rem #d7d7d7);
  /* filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));*/
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
  font-family: 'Avant Garde';
}
</style>
