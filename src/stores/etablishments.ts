import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '@/data'
import { Etablishments } from '@/models/domain/etablishments'

export const useEtablishmentsStore = defineStore('etablishments', () => {
  const etablishments = ref<Etablishments>(data.etablishments);

  const getEtablishmentById = (id: number) => etablishments.value.find((item) => item.id === id);
  const getProductById = (etablishmentId: number, productId: number) => getEtablishmentById(etablishmentId)?.products.find((item) => item.id === productId);

  return {
    etablishments,
    getEtablishmentById,
    getProductById,
  }
})
