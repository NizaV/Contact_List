const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadSomeData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact//agenda/nvera_agenda")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({
							contacts: data
						});
					})
					.catch(error => console.log(error));
			},
			addContact: async (name, email, address, phone) => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "nvera_agenda",
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
			},
			editContact: async (name, email, address, phone, index) => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + index, {
					method: "PUT",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "nvera_agenda",
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				getActions().loadSomeData();
			},
			deleteContact: async (name, email, address, phone, index) => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + index, {
					method: "DELETE",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "nvera_agenda",
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
