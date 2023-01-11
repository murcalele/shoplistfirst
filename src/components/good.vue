<template>
  <div class="good">
    <div>
      Название товара - {{ name }}
    </div>
    <img
        class="image"
        :src="goodImage"
        alt="goodImage"
    >
    <div>
      Цена товара - {{ price }}
    </div>
    <h3>
      Количество купленного товара {{amount * price}}
    </h3>
    <button @click="onClickAdd">
      Добавить товар
    </button>
    <button @click="onClickRemove">
      Убрать товар
    </button>
  </div>
</template>

<script>
import DefaultImage from '@/assets/default.jpeg'
export default {
  name: 'DefaultGood',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    goodImage: {
      type: String,
      default: DefaultImage
    },
  },
  methods: {
    onClickAdd() {
      this.$emit('addItem', this.id);
    },
    onClickRemove() {
      this.$emit('removeItem', this.id);
    }
  }
}
</script>

<style scoped>
.good {
  border-radius: 16px;
  background-color: antiquewhite;
  border: 1px solid darkgrey;
  padding: 20px;
}

.image {
  width: 200px;
  height: 200px;
  border-radius: 16px;
}
</style>