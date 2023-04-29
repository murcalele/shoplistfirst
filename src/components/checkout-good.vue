<template>
  <div class="good" @click="viewInfo">
    <img class="image" :src="goodImage" alt="goodImage" />
    <div>
      <div>Наименование товара - {{ name }}</div>
      <div>Цена товара - {{ price }}</div>
      <div>Количество купленного товара {{ amount }}</div>
    </div>
    <div class="buttonsContainer">
      <div class="customButton" @click.stop="onClickAdd">
        <div class="customButtonText">Добавить товар</div>
      </div>
      <div
        :class="['customButton', { customButtonDisabled: !amount }]"
        @click.stop="onClickRemove"
      >
        <div
          :class="['customButtonText', { customButtonTextDisabled: !amount }]"
        >
          Убрать товар
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultImage from "@/assets/default.jpeg";
export default {
  name: "CheckoutGood",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    goodImage: {
      type: String,
      default: DefaultImage,
    },
  },
  methods: {
    onClickAdd() {
      this.$emit("addItem", this.id);
    },
    onClickRemove() {
      if (this.amount) {
        this.$emit("removeItem", this.id);
      }
    },
    viewInfo() {
      this.$router.push(`itemInfo/${this.id}`);
    },
  },
};
</script>

<style scoped>
.good {
  width: 100%;
  height: 90px;
  max-height: 80px;
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
}

.image {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 12px;
}

.buttonsContainer {
  margin: auto 0 auto auto;
  display: flex;
  gap: 12px;
  align-items: center;
}

.customButton {
  min-width: 80px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #005bff;
  cursor: pointer;
  padding: 6px 8px;
  box-sizing: border-box;
}
.customButtonText {
  color: white;
}

.customButtonDisabled {
  cursor: default;
  background: rgb(97 131 162 / 26%);
}

.customButtonTextDisabled {
  color: rgb(0 17 34 / 56%);
}
</style>
