import Home from './pages/Home.svelte'
import Portfolio from './pages/Portfolio.svelte'

const routes = [
	{
		name: '/',
		component: Home
	},
	{
		name: 'portfolio/:item',
		component: Portfolio
	}
]

export { routes }