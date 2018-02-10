import inventory from '../components/Inventory'
import Itemdetails from '../components/ItemDetails'
export const routes = [
	{
		path:'/',
		component:inventory
	},
	{
		path:'/item/:id',
		component:Itemdetails
	},
]