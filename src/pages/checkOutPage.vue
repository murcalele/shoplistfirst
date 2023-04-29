<template>
  <div>
    <div class="goodsContainer">
      <good
        v-for="good in $store.state.thrasher"
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
</template>

<script>
import Good from "@/components/checkout-good.vue";

export default {
  name: "CheckOutPage",
  components: {
    Good,
  },
};
</script>

<style scoped>
.goodsContainer {
    width: 700px;
}

</style>
