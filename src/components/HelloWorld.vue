<template>
  <div class="hello">
    <h3>
      Количество купленного товара {{dochValue}}
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
export default {
  name: 'HelloWorld',
  props: {
    msg1: {
      type: String,
      default: ''
    },
    parentCounterValue: {
      type: Number,
      default: 0
    },
    needCheckForСounter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dochValue: 0,
    };
  },
  computed: {
    counterItemsIsNotEmpty() {
      return this.parentCounterValue !== 0;
    },
    dochValueIsNotEmpty(){
      return this.dochValue !== 0;
    }
  },
  methods: {
    onClickAdd() {
      this.$emit('addItem');
      this.dochValue += 1;
    },
    onClickRemove() {
      if (this.needCheckForСounter) {
        if (this.counterItemsIsNotEmpty) {
          if (this.dochValueIsNotEmpty){
            this.$emit('removeItem');
            this.dochValue -= 1;
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>