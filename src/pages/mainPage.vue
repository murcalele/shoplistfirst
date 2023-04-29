<template>
  <div>
    <div class="body">
      <div>
        {{this.$store.state.count}}
      </div>
      <div @click="kek1">
        654dfjgfg745
      </div>
      <h1 class="siteName">Всякая всячина</h1>
      <h2 v-if="kek === 1">
        kek = 1
      </h2>
      <h2 v-else-if="kek === 2">
        kek = 2
      </h2>
      <h2 v-else>
        brbrbr
      </h2>
      <h3>
        Количество купленных товаров {{totalGoods}}
      </h3>
      <h4>
        {{totalPrise}} рублей
      </h4>
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
  </div>
</template>

<script>
import Good from '@/components/good.vue'
import qweImage from '@/assets/1.jpeg'
import carImage from '@/assets/car.jpeg'
import watermelon from '@/assets/312288_11.jpeg'

export default {
  name: 'MainPage',
  components: {
    Good
  },
  data(){
    return {
      defaultCounter: 1,
      kek: 3,
      itemsPriceSum: {
        name: "Общая стоимость товаров",
        default: 0,
      },
      goodsList: [
        {
          id: '123o',
          name: "Беляш",
          amount: 0,
          once: 0,
          image: qweImage,
          price: 70,
        }, {
          id: '123o1',
          name: "Машина",
          amount: 0,
          once: 0,
          image: carImage,
          price: 7999800,
        }, {
          id: '123o2',
          name: "Грузинский арбуз",
          amount: 0,
          once: 0,
          image: watermelon,
          price: 120,
        }, {
          id: '123o3',
          name: "Бомбер",
          amount: 0,
          once: 0,
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
    },
    Goods() {
      let result = 0
      for (let good of this.goodsList) {
        result += good.once
      }
      return result;
    },
  },
  methods: {
    addItem(id) {
      for (let good of this.goodsList) {
        if (good.id === id){
          good.amount += this.defaultCounter;
          if (good.once >=0 && good.once <1){
            good.once += this.defaultCounter;
          }
        }
      }
    },
    removeItem(id) {
      for (let good of this.goodsList) {
        if (good.id === id && good.amount > 0){
          good.amount -= this.defaultCounter;
          if (good.once >0 && good.once <=1 && good.amount==0){
            good.once -= this.defaultCounter;
          }
        }
      }
    },
    kek1() {
      console.log(123)
      this.$store.dispatch('increment')
    }
  }
}
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.siteName {
  display: flex;
  justify-content: center;
  width: 100%;
}
.body {
  margin: 0px;
  background-color: #D8DDEF;
  position: relative;
}
</style>
