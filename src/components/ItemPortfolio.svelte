<script>
import { Navigate } from 'svelte-router-spa'

export let item
</script>

<div class="card">
	<div class="card-image">
		<Navigate to={`portfolio/${item}`}>
			<figure class="image is-5by3">
				<img src="https://placekitten.com/g/800/480" alt="Catto">
			</figure>
		</Navigate>
	</div>
</div>