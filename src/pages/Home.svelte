<script>
	import ItemPortfolio from '../components/ItemPortfolio.svelte'

	let items = [
		1,2,3
	]
</script>

<section class="container is-marinless" style="max-width: 100%;">
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

<section class="section is-medium hero is-info is-bold">
	<div class="container">
		<div class="content">
			<h2 class="title has-text-centered">
				Sobre mim
			</h2>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="content">
						<h3 class="title has-text-black">
							Lorem ipsum
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur voluptas totam itaque enim, eum culpa est amet earum temporibus natus. Aliquam vel assumenda quos modi quam doloribus debitis sed mollitia?
							Ex animi necessitatibus neque laboriosam qui quisquam dolor voluptatibus exercitationem vero officiis labore libero cum sequi quia at alias dolores, rem temporibus dicta illo velit sapiente. Facilis magni porro adipisci.
							Labore distinctio quis placeat maiores! Accusamus nostrum tempore cumque totam fugit odio, numquam inventore cupiditate autem quas, velit impedit harum. Excepturi id animi et libero aperiam distinctio laboriosam obcaecati repudiandae?
						</p>
					</div>

				</div>

			</div>

			<div class="column">
				<div class="box">
					<div class="content">
						<h3 class="title has-text-black">
							Lorem ipsum
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur voluptas totam itaque enim, eum culpa est amet earum temporibus natus. Aliquam vel assumenda quos modi quam doloribus debitis sed mollitia?
							Ex animi necessitatibus neque laboriosam qui quisquam dolor voluptatibus exercitationem vero officiis labore libero cum sequi quia at alias dolores, rem temporibus dicta illo velit sapiente. Facilis magni porro adipisci.
							Labore distinctio quis placeat maiores! Accusamus nostrum tempore cumque totam fugit odio, numquam inventore cupiditate autem quas, velit impedit harum. Excepturi id animi et libero aperiam distinctio laboriosam obcaecati repudiandae?
						</p>
					</div>

				</div>

			</div>

		</div>
	</div>
</section>

<section class="section is-medium">
	<div class="container">
		<h2 class="title has-text-centered">Portfólio</h2>
		<div class="columns">
			{#each items as item}
			<div class="column">
				<ItemPortfolio item={item} />
			</div>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2 class="title has-text-centered">Contato</h2>

		<div class="columns">
			<div class="column">
				<h3 class="subtitle">Entre em contato para batermos um papo</h3>
			</div>

			<div class="column">
				<form>
					<div class="field">
						<label for="nome" class="label">Nome</label>
						<div class="control">
							<input type="text" class="input" id="nome" placeholder="Fulano de tal">
						</div>
					</div>

					<div class="field">
						<label for="email" class="label">email</label>
						<div class="control">
							<input type="email" class="input" id="email" placeholder="exemplo@exemplo.com">
						</div>
					</div>

					<div class="field">
						<label for="assunto" class="label">Assunto</label>
						<div class="control">
							<input type="text" class="input" id="assunto" placeholder="orçamento">
						</div>
					</div>

					<div class="field">
						<label for="mensagem" class="label">Mensagem</label>
						<div class="control">
							<textarea id="mensagem" class="textarea" placeholder="Digite sua mensagem"></textarea>
						</div>
					</div>

					<div class="field is-grouped">
						<div class="control">
							<button type="submit" class="button is-link">Enviar</button>
						</div>

						<div class="control">
							<button type="reset" class="button is-link is-light">cancelar</button>
						</div>
					</div>

				</form>
			</div>

		</div>

	</div>
</section>

<style>
	.greeting{
		max-width: 320px;
	}

	.servicos .box{
		width: 220px;
	}
</style>