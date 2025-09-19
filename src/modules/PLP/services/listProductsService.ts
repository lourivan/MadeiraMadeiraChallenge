import axios from 'axios'
import { API_BASE } from '@env'
import { ProductsType } from '~/commons/types/productTypes'

export const getProducts = async (): Promise<ProductsType[]> => {
  return axios.get(`${API_BASE}/products`)
}
