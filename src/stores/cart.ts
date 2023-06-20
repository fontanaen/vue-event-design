import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useShopsStore } from '@/stores/shops'
import { Product } from '@/models/domain/products'

export const useCartStore = defineStore('cart', () => {
  const shopsStore = useShopsStore();

  const cart = ref<{shopId: number | null, list: Product[]}>({
    shopId: null,
    list: [],
  });

  const groupedByProducts = computed(() => cart.value.list.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item.id === product.id)
    if (existingProduct === undefined) {
        acc.push(Object.assign({}, product, { quantity: 1 }));
        return acc;
    }

    existingProduct.quantity++
    return acc
  }, [] as (Product & { quantity: number })[]));

  const totalAmount = computed(() => groupedByProducts.value.reduce((total, product) => {
    total += parseFloat(product.price) * product.quantity;
    return total;
  }, 0))

  const addToCart = (productId: number) => {
    const product = shopsStore.getProductById(cart.value.shopId, productId);

    if (product === undefined) throw new Error(`Product not found for id=${productId}`)
    
    cart.value.list.push(product);
  }

  const removeFromCart = (productId: number) => {
    const index = cart.value.list.findLastIndex(({ id }) => id === productId)

    if (index === -1) return;

    cart.value.list.splice(index, 1);

    if (cart.value.list.length === 0) cart.value.shopId = null;
  }

  const $reset = () => {
    cart.value = {
      shopId: null,
      list: [],
    }
  }

  return {
    cart,
    groupedByProducts,
    totalAmount,
    addToCart,
    removeFromCart,
    $reset,
  }
})
