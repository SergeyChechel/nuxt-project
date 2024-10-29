<template>
  <div class="product-card" @click="goToProduct">
    <img :src="product.image" alt="Product image" />
    <h3>{{ product.name }}</h3>
    <p>Price: ${{ product.price }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["product"]);
const router = useRouter();

const goToProduct = () => {
  router.push(`/product/${props.product.id}`);
};
</script>

<style scoped>
.product-card {
  width: 300px;
  min-height: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-card h3 {
  font-size: 1.5em;
  margin: 12px 0 8px;
}

.product-card p {
  margin: 4px 0;
}
</style>
