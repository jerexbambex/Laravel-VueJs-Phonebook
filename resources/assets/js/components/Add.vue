<template>
	<div class="modal" :class='openmodal'>
		<div class="modal-background"></div>
		<div class="modal-card box-shadow">
			<header class="modal-card-head">
				<p class="modal-card-title">New Contact</p>
				<!-- <button class="delete" aria-label="close" @click='close'></button> -->
				<a href=""  @click.prevent='close'><img src="/img/close.svg"></a>
			</header>
			<section class="modal-card-body">
			<!-- Content ... -->
			<div class="field">
				<label for="name" class="label">Name</label>
				<div class="control">
					<input class="input my-input" :class="{'is-danger':errors.name}" type="text" placeholder="Fullname" v-model='list.name' autofocus=true>
				</div>
				<small v-if="errors.name" class="has-text-danger">{{ errors.name[0] }}</small>
			</div>

			<div class="field">
				<label for="name" class="label">Phone</label>
				<div class="control">
					<input class="input my-input" :class="{'is-danger':errors.phone}" type="text" placeholder="Phone Number" v-model='list.phone'>
				</div>
				<small v-if="errors.phone" class="has-text-danger">{{ errors.phone[0] }}</small>
			</div>

			<div class="field">
				<label for="name" class="label">Email</label>
				<div class="control">
					<input class="input my-input" :class="{'is-danger':errors.email}" type="email" placeholder="Email" v-model='list.email'>
				</div>
				<small v-if="errors.email" class="has-text-danger">{{ errors.email[0] }}</small>
			</div>

			</section>

			<footer class="modal-card-foot">
				<div class="media-content">
					<nav class="level">
						<div class="level-left"></div>
						<div class="level-right">
							<a href="" class="level-item" @click.prevent='close'>
								Cancel
							</a>
							<a class="button is-rounded is-primary level-item" href="#" @click.prevent='save'>
								Save
							</a>
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
				list: {
					name: '',
					phone: '',
					email: ''
				},
				errors: {

				}
			}
		},
		methods: {
			close() {
				this.$emit('closeRequest')
			},
			save() {
				axios.post('/phonebook', this.$data.list)
				.then((response) => {
					this.close()
					this.$parent.lists.push(response.data)
					this.$parent.lists.sort(function(a, b) {
						if (a.name > b.name) {
							return 1;
						}else if (a.name < b.name) {
							return -1;
						}
					})
					this.list = ""
				})
				.catch((error) => this.errors = error.response.data.errors)
			}
		}
	}
</script>