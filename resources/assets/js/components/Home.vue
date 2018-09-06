<template>
	<div>
		<nav class="panel column is-offset-2 is-8 box-shadow">
			<div class="panel-heading navbar-menu">
			Vuejs Phonebook
				<span class="navbar-end">
					<button class="button is-primary is-outlined is-rounded" @click.prevent="openAdd">
						Add New
					</button>
				</span>
				<span class="is-pulled-right" v-if="loading">
					<i class="fa fa-circle-o-notch fa-spin fa-1x icon"></i>
				</span>

			</div>
			<div class="panel-block">
				<p class="control has-icons-left">
					<input class="input" type="text" placeholder="search" style="border: 0px; background-color: hsl(210, 9%, 96%); box-shadow: none !important; border-radius: 30px !important;" autofocus>
					<span class="icon is-left">
						<i class="fa fa-search" aria-hidden="true"></i>
					</span>
				</p>
			</div>
			<a class="panel-block table-padding" v-for="item, key in lists">
				<span class="is-9">
					<span class="icon is-small is-left"><img src="/img/eclispe.svg"></span>
					{{ item.name }}
				</span>

				<div class="navbar-end is-right">
					<a class="icon-text" @click="openShow(key)">View</a>
					<span class="is-small icon-text">|</span>
					<a class="icon-text" @click="openUpdate(key)">Edit</a>
					<span class="is-small icon-text">|</span>
					<a class="icon-text has-text-danger" @click="del(key, item.id)">Delete</a>
				</div>
			</a>
		</nav>

		<add :openmodal='addActive' @closeRequest='close'></add>
		<show :openmodal='showActive' @closeRequest='close'></show>
		<update :openmodal='updateActive' @closeRequest='close'></update>
	</div>
</template>

<script>
	Vue.component('add', require('./Add.vue'));
	Vue.component('show', require('./Show.vue'));
	Vue.component('update', require('./Update.vue'));

	export default {
		data() {
			return {
				addActive : '',
				showActive : '',
				updateActive : '',
				lists: {},
				errors: {},
				loading: false
			}
		},
		mounted() {
			axios.post('/getData')
			  .then((response) => this.lists = response.data)
			  .catch((error) => this.errors = error.response.data.errors);
		},
		methods: {
			openAdd() {
				this.addActive = 'is-active'
			},
			openShow(key) {
				this.$children[1].list = this.lists[key]
				this.showActive = 'is-active';
			},
			openUpdate(key) {
				this.$children[2].list = this.lists[key]
				this.updateActive = 'is-active';
			},
			close() {
				this.addActive = this.showActive = this.updateActive = ''
			},
			del(key, id) {
				if (confirm("Are you sure ?")) {
					this.loading = !this.loading
					axios.delete(`/phonebook/${id}`)
					.then((response) => {this.lists.splice(key, 1);this.loading = !this.loading})
					.catch((error) => this.errors = error.response.data.errors);
				}
			}
		}
	}
</script>