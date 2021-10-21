import { Model } from 'api/BaseServices/declarations'

export interface Product extends Model {
	id: number
	name: string
	cover: string
	price: number
}
