const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			id: ""
		},
		actions: {
			loadSomeApi: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/")
					.then(response => response.json())
					.then(data => {
						let { store } = this.state;
						store.contacts = data;
						this.setState({ store });
						console.log(store.contacts);
					});
			},

			addContact: contact => {
				Flux.dispatchEvent("contacts", dataToSave);
				this.addEvent("contacts", data => {
					return data;
				});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
