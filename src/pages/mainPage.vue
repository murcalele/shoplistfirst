<template>
  <div>
    <div class="body">
      <h1 class="siteName">Всякая всячина</h1>
      <div class="goodsListContainer">
        <div class="goodsList">
          <good
            v-for="good in this.$store.state.goodsList"
            :key="good.id"
            :id="good.id"
            :name="good.name"
            :price="good.price"
            :amount="$store.state.thrasher[good.id]?.amount || 0"
            :goodImage="good.image"
            @addItem="() => $store.dispatch('addItem', good)"
            @removeItem="() => $store.dispatch('removeItem', good)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Good from "@/components/good.vue";

export default {
  name: "MainPage",
  components: {
    Good,
  },
};
</script>

<style>
.goodsListContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.goodsList {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}
.siteName {
  display: flex;
  justify-content: center;
  width: 100%;
}
.body {
  margin: 0;
}
</style>
