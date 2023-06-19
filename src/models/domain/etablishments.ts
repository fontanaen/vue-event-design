import type { Product } from '@/models/domain/products'

export type Etablishment = {
    id: number,
    name: string,
    products: Product[]
}

export type Etablishments = Etablishment[]