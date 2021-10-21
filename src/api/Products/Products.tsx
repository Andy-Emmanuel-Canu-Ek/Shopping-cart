import axios from 'axios'
import BaseService from '../BaseServices'
import { Product } from './declaration'

export class ProductsService extends BaseService {
	protected name: string = 'products'

	async find(): Promise<Product[]> {
		try {
			const response = await axios.get<Product[]>(
				`${this.url}/${this.name}`,
			)
			const { data: axiosData } = response
			return axiosData as Product[]
		} catch (error) {
			throw this.handleError(error)
		}
	}
}

const service = new ProductsService()
export default service
