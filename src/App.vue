<template>
  <div id="app">
    <h1>Магазин у Ашота</h1>
    <h1>
      Количество купленных товаров {{totalGoods}}
    </h1>
    <h1>
      {{totalPrise}} рублей
    </h1>
    <div class="goodsListContainer">
      <div class="goodsList">
        <good
            v-for="good in goodsList"
            :key="good.id"
            :id="good.id"
            :name="good.name"
            :price="good.price"
            :amount="good.amount"
            :goodImage="good.image"
            @addItem="addItem"
            @removeItem="removeItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Good from './components/good.vue'
import qweImage from '@/assets/1.jpeg'
import carImage from '@/assets/car.jpeg'
import watermelon from '@/assets/312288_11.jpeg'

export default {
  name: 'App',
  components: {
    Good
  },
  data(){
    return {
      defaultCounter: 1,
      itemsPriceSum: {
        name: "Общая стоимость товаров",
        default: 0,
      },
      goodsList: [
      {
        id: '123o',
        name: "Бляш",
        amount: 0,
        image: qweImage,
        price: 70,
      }, {
        id: '123o1',
        name: "Машина",
        amount: 0,
        image: carImage,
        price: 800,
      }, {
        id: '123o2',
        name: "Грузинский арбус",
        amount: 0,
        image: watermelon,
        price: 120,
      }, {
        id: '123o3',
        name: "Осетинский пирог",
        amount: 0,
        price: 190,
      },
    ]
    };
  },
  computed: {
    totalGoods() {
      let result = 0
      for (let good of this.goodsList) {
        result += good.amount
      }
      return result;
    },
    totalPrise() {
      let result = 0
      for (let good of this.goodsList) {
        result += good.price * good.amount
      }
      return result;
    }
  },
  methods: {
    addItem(id) {
      for (let good of this.goodsList) {
        if (good.id === id){
          good.amount += this.defaultCounter;
        }
      }
    },
    removeItem(id) {
      for (let good of this.goodsList) {
        if (good.id === id && good.amount > 0){
          good.amount -= this.defaultCounter;
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.goodsListContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.goodsList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
