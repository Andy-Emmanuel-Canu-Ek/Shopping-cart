import { Model } from 'api/BaseService/declarations'

export interface Product extends Model {
	id: number
	name: string
	cover: string
	price: number
}
