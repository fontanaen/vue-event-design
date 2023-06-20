import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '@/data'
import { Shops } from '@/models/domain/shops'

export const useShopsStore = defineStore('shops', () => {
  const shops = ref<Shops>(data.shops);

  const getShopById = (id: number) => shops.value.find((item) => item.id === id);
  const getProductById = (shopId: number, productId: number) => getShopById(shopId)?.products.find((item) => item.id === productId);

  return {
    shops,
    getShopById,
    getProductById,
  }
})
