<template>
  <div class="good" @click="viewInfo">
    <div>
      {{this.$store.state.count}}
    </div>
    <div>
      Наименование товара - {{ name }}
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
      Количество купленного товара {{amount}}
      <br>Итоговая цена купленного товара {{amount * price}}
    </h3>
    <button @click.stop="onClickAdd">
      Добавить товар
    </button>
    <button @click.stop="onClickRemove">
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
    once: {
      type: Number,
      required: true,
      default: 0,
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
    },
    viewInfo() {
      this.$router.push(`itemInfo/${this.id}`);
    }
  }
}
</script>

<style scoped>
.good {
  border-radius: 16px;
  background-color: #FFE882;
  border: 1px solid #388697;
  padding: 20px;
}

.image {
  width: 200px;
  height: 200px;
  border-radius: 16px;
}
</style>