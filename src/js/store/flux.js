const backendApiUrl = "http://0.0.0.0:3000";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadSomeData: () => {
				fetch(backendApiUrl + "/agenda")
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
			addContact: async (full_name, email, address, phone, history) => {
				let response = await fetch(backendApiUrl + "/add", {
					method: "POST",
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(() => getActions().loadSomeData())
					.then(() => history.push("/contacts"));
			},
			editContact: async (full_name, email, address, phone, id) => {
				let response = await fetch(backendApiUrl + "/update/" + id.toString(), {
					method: "PUT",
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				getActions().loadSomeData();
			},
			deleteContact: async id => {
				let response = await fetch(backendApiUrl + "/delete/" + id.toString(), {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().loadSomeData());
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
