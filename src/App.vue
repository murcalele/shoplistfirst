<template>
  <div id="app">
    <h1>Магазин у Ашота</h1>
    <h1>
      Количество купленных товаров {{counterItems}}
    </h1>
    <h1>
      {{itemsPriceSum.name}} {{itemsPriceSum.default}} рублей
    </h1>
    <h2>
      {{item1.name}} {{item1.price}} рублей
    </h2>
    <hello-world
        :parent-counter-value="counterItems"
        :items-price-sum="itemsPriceSum.default"
        :item1-price="item1.price"
        @addItem="counterItems +=1, itemsPriceSum.default +=item1.price"
        @removeItem="counterItems-=1, itemsPriceSum.default -=item1.price"
    />
    <h2>
      {{item2.name}} {{item2.price}} рублей
    </h2>
    <hello-world
        :parent-counter-value="counterItems"
        :items-price-sum="itemsPriceSum.default"
        :item2-price="item2.price"
        @addItem="counterItems +=1, itemsPriceSum.default +=item2.price"
        @removeItem="counterItems-=1, itemsPriceSum.default -=item2.price"
    />
    <h2>
      {{item3.name}} {{item3.price}} рублей
    </h2>
    <hello-world
        :parent-counter-value="counterItems"
        :items-price-sum="itemsPriceSum.default"
        :item3-price="item3.price"
        @addItem="counterItems +=1, itemsPriceSum.default +=item3.price"
        @removeItem="counterItems-=1, itemsPriceSum.default -=item3.price"
    />
    <h2>
      {{item4.name}} {{item4.price}} рублей
    </h2>
    <hello-world
        :parent-counter-value="counterItems"
        :items-price-sum="itemsPriceSum.default"
        :item4-price="item4.price"
        @addItem="counterItems +=1, itemsPriceSum.default +=item4.price"
        @removeItem="counterItems-=1, itemsPriceSum.default -=item4.price"
    />
    <h2>
      {{item5.name}} {{item5.price}} рублей
    </h2>
    <hello-world
        :parent-counter-value="counterItems"
        :items-price-sum="itemsPriceSum.default"
        :item5-price="item5.price"
        @addItem="counterItems +=1, itemsPriceSum.default +=item5.price"
        @removeItem="counterItems-=1, itemsPriceSum.default -=item5.price"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      counterItems: 0,
      itemsPriceSum: {
        name: "Общая стоимость товаров",
        default: 0,
      },
      item1: {
        name: "Беляш",
        price: 70,
      },
      item2: {
        name: "Вино",
        price: 800,
      },
      item3: {
        name: "Грузинский пирог",
        price: 120,
      },
      item4: {
        name: "Хачапури",
        price: 100,
      },
      item5: {
        name: "Осетинский пирог",
        price: 190,
      },
    };
  },
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
</style>
