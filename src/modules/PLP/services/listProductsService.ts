import axios from 'axios'
import { API_BASE } from '@env'
import { AxiosResponse } from 'axios'
import { ProductsType } from '~/commons/types/productTypes'

export const getProducts = async (): Promise<AxiosResponse<ProductsType[]>> => {
  return axios.get(`${API_BASE}/products`)
}
