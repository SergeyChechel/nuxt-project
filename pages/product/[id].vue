<template>
  <div v-if="product" class="product-details">
    <h1 class="product-title">{{ product.name }}</h1>
    <div class="image-container">
      <img :src="product.image" alt="Product image" class="product-image" />
    </div>
    <p class="product-description">{{ product.description }}</p>
    <p class="product-full-description">{{ product.fullDescription }}</p>
    <p class="product-price">Price: ${{ product.price }}</p>
    <button @click="goBack" class="back-button">Back to Products</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const product = ref(null);
const route = useRoute();
const router = useRouter();
const productId = route.params.id;

onMounted(async () => {
  const response = await axios.get("/products.json");
  product.value = response.data.find((p) => p.id === parseInt(productId));
});

const goBack = () => {
  router.push("/");
};
</script>

<style scoped>
.product-details {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.product-title {
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.image-container {
  text-align: center;
}

.product-image {
  width: 70%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.product-description,
.product-full-description {
  margin: 10px 0;
  line-height: 1.6;
  color: #555;
}

.product-price {
  font-size: 1.5em;
  font-weight: bold;
  margin: 20px 0;
  color: #e67e22;
}

.back-button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.back-button:hover {
  background-color: #2980b9;
}
</style>
