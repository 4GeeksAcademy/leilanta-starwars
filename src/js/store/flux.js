const getState = ({ getStore, setStore }) => {
	return {
		store: {
			starships: [],
			people: [],
			planets: [],
			favorites: [],
			API_URL: "https://www.swapi.tech/api",
		},

		actions: {
			getStarships: async function () {
				const store = getStore();
				try {
					const response = await fetch(`${store.API_URL}/starships`);
					if (response.ok) {
						const data = await response.json();
						console.log(data.results);
						data.results.forEach(async function (element) {
							let responseElement = await fetch(`${store.API_URL}/starships/${element.uid}`);
							let dataItem = await responseElement.json();
							setStore({ starships: [...store.starships, dataItem.result] });
						});
					}
				} catch (error) {
					console.log(error);
				}

			},
			getPlanets: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.API_URL}/planets`)
					if (response.ok) {
						const data = await response.json()
						console.log(data.results)
						data.results.forEach(async function (element) {
							let responseElement = await fetch(`${store.API_URL}/planets/${element.uid}`);
							let dataItem = await responseElement.json();
							console.log(dataItem);
							setStore({ planets: [...store.planets, dataItem.result] });
						});
					}
				} catch (error) {
					console.log(error)
				}

			},
			getPeople: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.API_URL}/people`)
					if (response.ok) {
						const data = await response.json()
						console.log(data.results)
						data.results.forEach(async function (element) {
							let responseElement = await fetch(`${store.API_URL}/people/${element.uid}`);
							let dataItem = await responseElement.json();
							console.log(dataItem);
							setStore({ people: [...store.people, dataItem.result] });
						});
					}
				} catch (error) {
					console.log(error)
				}

			},
			getFavorites: (inf) => {
				const store = getStore()
				const path = store.favorites.some((item) => inf == item)
				console.log(path)
				if (path) {
					const fav = store.favorites.filter((item) => inf != item)
					setStore({ favorites: fav })

				} else {
					setStore({ favorites: [...store.favorites, inf] })
				}
			},
			removeFavorites: function (id) {
				setStore({
					favorites: getStore().favorites.filter((item, i) => {
						return i != id;
					})
				});
			},
		}
	}
};

export default getState;