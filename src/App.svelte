<script>
	import Sobre from './components/Sobre.svelte';
	import Portfolio from './components/Portfolio.svelte';
</script>

<main>
	<section class="container is-fullhd">
		<div class="hero is-medium hero-image">
			<div class="hero-body">
    		<div class="container">
					<div class="columns">
						<div class="column">
							<div class="box greeting">
								<h1 class="title is-white">
									Vinicius Domingos
								</h1>
								<p class="subtitle">
									Dev. Fron-End em <strong>Suzano-SP</strong>
								</p>
							</div>
						</div>

						<div class="column is-one-third servicos">
							<div class="box is-pulled-right">
								<figure class="image is-128x128">
									<img src="assets/web-page.svg" alt="Icone">
								</figure>
								<h2 class="title">
									Criação de sites
								</h2>
							</div>

							<div class="box is-pulled-left">
								<figure class="image is-128x128">
									<img src="assets/web-page.svg" alt="Icone">
								</figure>
								<h2 class="title">
									Apps
								</h2>
							</div>
						</div>

					</div>

				</div>

			</div>

    </div>
  </section>
	<Sobre />

	<Portfolio />
</main>

<style>
	.greeting{
		max-width: 320px;
	}

	.servicos .box{
		width: 220px;
	}
</style>