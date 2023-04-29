import Vue from "vue";
import Vuex from "vuex";
import qweImage from "@/assets/1.jpeg";
import carImage from "@/assets/car.jpeg";
import watermelon from "@/assets/312288_11.jpeg";
import taburet from "@/assets/taburet.jpeg";
import lemon from "@/assets/lemon.jpeg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsList: [
      {
        id: "000-001",
        name: "Беляш",
        amount: 0,
        totalAmount: 21,
        image: qweImage,
        price: 70,
      },
      {
        id: "000-002",
        name: "Машина",
        amount: 0,
        totalAmount: 10,
        image: carImage,
        price: 7999800,
      },
      {
        id: "000-003",
        name: "Грузинский арбуз",
        amount: 0,
        totalAmount: 60,
        image: watermelon,
        price: 60,
      },
      {
        id: "000-004",
        name: "Бомбер",
        amount: 0,
        totalAmount: 50,
        price: 500,
      },
      {
        id: "000-005",
        name: "Табурет Легенда",
        amount: 0,
        totalAmount: 2,
        image: taburet,
        price: 1500,
      },
      {
        id: "000-006",
        name: "Лимон",
        amount: 1,
        totalAmount: 200,
        image: lemon,
        price: 40,
      },
    ],
    thrasher: {
      "000-006": {
        id: "000-006",
        name: "Лимон",
        amount: 1,
        totalAmount: 200,
        image: lemon,
        price: 40,
      },
    },
  },
  getters: {
    totalItemsInThrasher: state => {
      return Object.values(state.thrasher).reduce(function(sum, current) {
        return sum + current.amount;
      }, 0);
    }
  },
  mutations: {
    addItem(state, thrasher) {
      state.thrasher = thrasher;
    },
    removeItem(state, thrasher) {
      state.thrasher = thrasher;
    },
  },
  actions: {
    addItem({ commit, state }, item) {
      console.log('item', item)
      const temporaryItem = Object.assign({}, item);
      const thrasher = Object.assign({}, state.thrasher);

      if (thrasher[temporaryItem.id]) {
        thrasher[temporaryItem.id].amount += 1;
      } else {
        temporaryItem.amount = 1;
        thrasher[temporaryItem.id] = temporaryItem;
      }

      commit("addItem", thrasher);
    },

    removeItem({ commit, state }, item) {
      const temporaryItem = Object.assign({}, item);
      const thrasher = Object.assign({}, state.thrasher);
      if (thrasher[temporaryItem.id]) {
        thrasher[temporaryItem.id].amount -= 1;
      }
      commit("removeItem", thrasher);
    },
  },
});
