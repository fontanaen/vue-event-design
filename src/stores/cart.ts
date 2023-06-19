import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useEtablishmentsStore } from '@/stores/etablishments'
import { Product } from '@/models/domain/products'

export const useCartStore = defineStore('cart', () => {
  const etablishmentsStore = useEtablishmentsStore();

  const cart = ref<{etablishmentId: number | null, list: Product[]}>({
    etablishmentId: null,
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
    const product = etablishmentsStore.getProductById(cart.value.etablishmentId, productId);

    if (product === undefined) throw new Error(`Product not found for id=${productId}`)
    
    cart.value.list.push(product);
  }

  const removeFromCart = (productId: number) => {
    const index = cart.value.list.findLastIndex(({ id }) => id === productId)

    if (index === -1) return;

    cart.value.list.splice(index, 1);

    if (cart.value.list.length === 0) cart.value.etablishmentId = null;
  }

  const $reset = () => {
    cart.value = {
      etablishmentId: null,
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
