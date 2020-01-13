<script>
import { Navigate } from 'svelte-router-spa'
</script>

<section class="section is-medium">
	<div class="container">
		<h2 class="title has-text-centered">Portfólio</h2>

		<div class="columns">
			<div class="column">

				<div class="card">
					<div class="card-image">
						<Navigate to="portfolio/1">
							<figure class="image is-5by3">
								<img src="https://placekitten.com/g/800/480" alt="Catto">
							</figure>
						</Navigate>
					</div>

				</div>
				
			</div>

			<div class="column">

				<div class="card">
					<div class="card-image">
						<Navigate to="portfolio/2">
							<figure class="image is-5by3">
								<img src="https://placekitten.com/g/800/480" alt="Catto">
							</figure>
						</Navigate>
					</div>

				</div>
			</div>

		</div>

	</div>
</section>