<script>
import { Router } from 'svelte-router-spa'
import { routes } from './routes'

</script>

<main>
	<nav>
		<a href="/">Home</a>
		<a href="/portfolio/2">portfolio</a>
	</nav>
	<Router {routes} />

	<footer class="section hero is-info is-small">
		<div class="level">
			<h2 class="level-left subtitle">Vinicius Domingos - desenvolvedor front-end</h2>
			<div class="level-right">
				<a href="https://github.com/Virisco" class="has-text-black-bis">
					<span class="icon">
						<i class="fab fa-github"></i>
					</span>
				 github
				</a>
			</div>
		</div>
	</footer>
</main>
