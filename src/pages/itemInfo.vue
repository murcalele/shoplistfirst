<template>
  <div>
    <good
      :id="currentItem.id"
      :need-redirect="false"
      :name="currentItem.name"
      :price="currentItem.price"
      :amount="$store.state.thrasher[currentItemId]?.amount || 0"
      :goodImage="currentItem.image"
      @addItem="() => addItem(currentItem)"
      @removeItem="() => removeItem(currentItem)"
    />
    <div>
      {{ currentItem }}
    </div>
  </div>
</template>

<script>
import Good from "@/components/good.vue";
import { mapActions } from "vuex";
export default {
  name: "ItemInfo",
  components: {
    Good,
  },
  computed: {
    currentItem: function () {
      return this.$store.state.goodsList.filter(
        (item) => item.id === this.currentItemId
      )[0];
    },
    currentItemId: function () {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(["addItem", "removeItem"]),
  },
};
</script>

<style scoped></style>
