var shoppingList = new Vue({
	el: '#app',
	data() {
		return {
			title: 'Shopping List',
			list: [],
			value: ''
		}
	},
	computed: {
		add() {
			this.list.push(this.value)
			this.value = ''
		},
		del() {
			this.lisy = []
		}
	}
})