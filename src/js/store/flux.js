const backendApiUrl = "https://3000-d9711888-b9ce-45eb-9d7d-408e499ef35c.ws-us02.gitpod.io";

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
			addContact: async (name, email, address, phone, history) => {
				let response = await fetch(backendApiUrl + "/add", {
					method: "POST",
					body: JSON.stringify({
						full_name: name,
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
			editContact: async (name, email, address, phone, id) => {
				let response = await fetch(backendApiUrl + "/update/" + id.toString(), {
					method: "PUT",
					body: JSON.stringify({
						full_name: name,
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
