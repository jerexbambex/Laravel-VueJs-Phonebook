<template>
	<div class="modal" :class='openmodal'>
		<div class="modal-background"></div>
		<div class="modal-card box-shadow2">
			<header class="modal-card-head">
				<p class="modal-card-title">{{ list.name }}'s Details</p>
				<!-- <button class="delete" aria-label="close" @click='close'></button> -->
				<a href=""  @click.prevent='close'><img src="/img/close.svg"></a>
			</header>
			<section class="modal-card-body">
				<!-- Content ... -->
				<li class="panel-block card-border">
					<label for="name" class="label column is-2">Name</label>
					<p>{{ list.name }}</p>
				</li>

				<li class="panel-block card-border">
					<label for="name" class="label column is-2">Phone</label>
					<p>{{ list.phone }}</p>
				</li>

				<li class="panel-block card-border">
					<label for="name" class="label column is-2">Email</label>
					<p>{{ list.email }}</p>
				</li>

			</section>
			<footer class="modal-card-foot">
				<div class="media-content">
					<nav class="level">
						<div class="level-left"></div>
						<div class="level-right">
							<a href="" class="button is-primary level-item is-rounded" @click.prevent='close'>
								Cancel
							</a>
							<!-- <a class="button is-primary level-item" href="#" @click.prevent='save'>
								Save changes
							</a> -->
						</div>
					</nav>
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['openmodal'],
		data() {
			return {
				list: ''
			}
		},
		methods: {
			close() {
				this.$emit('closeRequest')
			}
		}
	}
</script>