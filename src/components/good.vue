<template>
  <div class="good" @click="viewInfo">
    <img class="image" :src="goodImage" alt="goodImage" />
    <div>Наименование товара - {{ name }}</div>
    <div>Цена товара - {{ price }}</div>
    <p>Количество купленного товара {{ amount }}</p>
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
  name: "DefaultGood",
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
    needRedirect: {
      type: Boolean,
      default: true,
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
      this.needRedirect && this.$router.push(`itemInfo/${this.id}`);
    },
  },
};
</script>

<style scoped>
.good {
  width: 330px;
  height: 400px;
  max-width: 330px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: rgba(97, 131, 162, 0.1);
  padding: 24px;
  box-sizing: border-box;
}

.image {
  width: 200px;
  height: 200px;
  border-radius: 16px;
  margin: 0 auto 12px auto;
}

.buttonsContainer {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.customButton {
  width: 50%;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #005bff;
  cursor: pointer;
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
