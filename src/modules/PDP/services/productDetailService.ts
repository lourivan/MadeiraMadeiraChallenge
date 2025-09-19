import axios from 'axios'
import { API_BASE } from '@env'
import { ProductsType } from '~/commons/types/productTypes'

export const getProductDetail = async (
  productId: number,
): Promise<ProductsType> => {
  return axios.get(`${API_BASE}/products/${productId}`)
}
