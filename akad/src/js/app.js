const app = new Vue ({
	el: "#app",
	data: {
			navigation: [ "home",
						  "about us",
						  "services",
						  "portfolio",
						  "blog",
						  "contact us" ],
			isShown: true,
	},
	mounted: function () {
		setInterval( () => this.isShown = !this.isShown, 6000)
	}
});
