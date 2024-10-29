<template>
  <div v-if="showProducts">
    <h1>Products</h1>
    <!-- Фильтр -->
    <div class="filter">
      <label for="priceFilter">Filter by Price: </label>
      <select
        v-model="selectedFilter"
        @change="filterProducts"
        id="priceFilter"
      >
        <option value="all">All</option>
        <option value="cheap">Cheap</option>
        <option value="medium">Medium</option>
        <option value="expensive">Expensive</option>
      </select>
    </div>

    <div class="products-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useProductsStore } from '~/stores/products'; // Импортируем ваш store

const products = ref([]);
const filteredProducts = ref([]);
const selectedFilter = ref("all");
const router = useRouter();
const store = useProductsStore(); // Создаем экземпляр стора

// Вычисляемое свойство для управления отображением продуктов
const showProducts = computed(() => store.showProducts);

onMounted(async () => {
  const response = await axios.get("/products.json");
  products.value = response.data;
  filteredProducts.value = products.value; // Спочатку показуємо всі продукти
});

// Функция для перехода на страницу продукта
const goToProduct = (id) => {
  router.push(`/product/${id}`);
};

// Функция для фильтрации продуктов
const filterProducts = () => {
  switch (selectedFilter.value) {
    case "cheap":
      filteredProducts.value = products.value.filter(
        (product) => product.price < 200
      );
      break;
    case "medium":
      filteredProducts.value = products.value.filter(
        (product) => product.price >= 200 && product.price < 500
      );
      break;
    case "expensive":
      filteredProducts.value = products.value.filter(
        (product) => product.price >= 500
      );
      break;
    default:
      filteredProducts.value = products.value;
  }
};
</script>

<style scoped>
.filter {
  padding-bottom: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 колонки */
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
}
</style>
