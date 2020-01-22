<script>
import { fade } from 'svelte/transition'
import { Route } from 'svelte-router-spa'

export let currentRoute
const { item } = currentRoute.namedParams

function toggleMenu(event){
	const ulMenu = document.querySelector('div#menu ul')

	ulMenu.classList.toggle('is-hidden')
}
</script>

<Route {currentRoute} />

<section class="container is-marginless">

	<div transition:fade class="box" id="menu">
		<div on:click={toggleMenu} class="navbar-burger burger is-marginless">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul class="is-hidden is-pulled-right">
			<li>
				<a href="/">Home</a>
			</li>
			<hr>
			<li class="subtitle">Portfolio</li>
			<li>
				<a href="/portfolio/1">Item 1</a>
			</li>
			<li>
				<a href="/portfolio/2">Item 2</a>
			</li>
			<li>
				<a href="/portfolio/3">Item 3</a>
			</li>
		</ul>
	</div>

	<div class="hero is-large hero-image-portfolio">
		<div class="hero-body">
			<h2 class="title has-text-centered has-text-white">Item do portfolio nº {item}</h2>
		</div>

	</div>

</section>

<div class="container">
	<div class="box is-relative">
		<h3 class="title">Descrição do Projeto</h3>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt adipisci cumque commodi amet, molestiae et facere quos cupiditate atque nam similique repudiandae, repellendus consectetur. Expedita inventore dolores ex aut tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, numquam voluptates laboriosam quas suscipit nulla porro maiores, cupiditate recusandae, est necessitatibus dolorum ipsum unde sequi. Eum vel maiores non dignissimos?</p>
	</div>
</div>

<section class="section">
	<div class="container">
		<div class="box">
			<figure class="image is-16by9">
				<img src="https://placekitten.com/g/800/480" alt="Catto">
			</figure>
		</div>

		<div class="box is-hidden-mobile">
			<div class="columns">
				<div class="column">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://placekitten.com/g/800/480" alt="Catto">
							</figure>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://placekitten.com/g/800/480" alt="Catto">
							</figure>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://placekitten.com/g/800/480" alt="Catto">
							</figure>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://placekitten.com/g/800/480" alt="Catto">
							</figure>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>

<style>
	.hero-image-portfolio{
		background: url('https://placekitten.com/g/1360/768') 100% / cover no-repeat;
	}
	section{
		max-width: 100%;
	}
	#menu{
		position: absolute;
		width: 250px;
		left: 10px;
		top: 10px;
	}
	#menu div.navbar-burger{
		display: block;
	}
	#menu ul{
		width: 150px;
	}
	div.hero-body{
		background: rgba(0, 0, 0, 0.411);
	}
	div.is-relative{
		top: -30px;
	}
</style>

