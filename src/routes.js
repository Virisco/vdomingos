import Home from './pages/Home.svelte'
import ItemPortfolio from './pages/ItemPortfolio.svelte'

const routes = [
	{
		name: '/',
		component: Home
	},
	{
		name: 'portfolio/:item',
		component: ItemPortfolio
	}
]

export { routes }