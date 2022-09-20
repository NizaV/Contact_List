const backendApiUrl = "https://contact-crm-vera.herokuapp.com/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			inProcess: [],
			inContact: [],
			won: [],
			loss: []
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
			addContact: async (full_name, email, address, phone, status, history) => {
				let response = await fetch(backendApiUrl + "/add", {
					method: "POST",
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						address: address,
						phone: phone,
						status: status
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(() => getActions().loadSomeData())
					.then(() => history.push("/contacts"));
			},
			editContact: async (full_name, email, address, phone, status, id) => {
				let response = await fetch(backendApiUrl + "/update/" + id.toString(), {
					method: "PUT",
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						address: address,
						phone: phone,
						status: status
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				getActions().loadSomeData();
			},
			updateStatus: async (updateContact, contactId) => {
				// console.log(updateContact, contactId);
				const store = getStore();
				let updatedContact = {};
				let updatedList = [];
				for (let contact of store.contacts) {
					if (contact.id == contactId) {
						Object.assign(updatedContact, contact, updateContact);
						updatedList.push(updatedContact);
					} else {
						updatedList.push(contact);
					}
				}
				setStore({
					contacts: updatedList
				});
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
