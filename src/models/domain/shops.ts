import type { Product } from '@/models/domain/products'

export type Shop = {
    id: number,
    name: string,
    products: Product[]
}

export type Shops = Shop[]