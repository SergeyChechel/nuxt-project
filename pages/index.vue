<template>
  <div>
    <h1>Добро пожаловать на главную страницу!</h1>
    <button @click="toggleProducts">Показать товары</button>
    <Products v-if="showProducts" />
  </div>
</template>

<script setup>
import { useProductsStore } from "~/stores/products";
import Products from "~/components/Products.vue";

const store = useProductsStore();

const showProducts = computed(() => store.showProducts);

const toggleProducts = () => {
  store.toggleProducts();
};
</script>

<style scoped>
button {
  margin-top: 20px;
}
</style>
