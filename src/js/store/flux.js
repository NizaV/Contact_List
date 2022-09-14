const backendApiUrl = "http://0.0.0.0:3000/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [{}],
			currentUser: {
				username: "",
				token: null
			},
			contacts: [],
			inProcess: [],
			inContact: [],
			won: [],
			loss: []
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
			signUp: async (email, username, password) => {
				let response = await fetch(`${backendApiUrl}register`, {
					method: "POST",
					body: JSON.stringify({
						email: email,
						username: username,
						password: password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ users: data });
					});
				if (response.ok) {
					await getActions().login(username, password);
					return true;
				} else {
					return false;
				}
			},
			// protectedEndpoint: () => {
			// 	const store = getStore();
			// 	fetch(`${backendApiUrl}agenda/`, {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 			Authorization: `Bearer ${store.token}`
			// 		}
			// 	}).then(() =>
			// 		fetch(`${backendApiUrl}vendor`, {
			// 			method: "GET",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				Authorization: `Bearer ${store.token}`
			// 			}
			// 		})
			// 			.then(response => response.json())
			// 			.then(data => setStore({ currentVendor: data }))
			// 	);
			// },
			login: (username, password) => {
				fetch(`${backendApiUrl}login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(response => response.json())
					.then(data => {
						setStore({ token: data.access_token });
					});
			},
			// logout: () => {
			// 	let store = getStore();
			// 	store.token = "";
			// 	store.user = {};
			// 	setStore(store);
			// },
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
			// updateOrder: async (updateDict, orderId) => {
			// 	const url = `${backendApiUrl}orders/${orderId}`;
			// 	// here your would fetch this url with the updateDict
			// 	// which will always be an object with properties and
			// 	// values to be updated for the order with id = orderId
			// 	// for now we just update the given order in the store
			// 	const store = getStore();
			// 	let updatedOrder = {};
			// 	let updatedList = [];
			// 	for (let order of store.orders) {
			// 		if (order.id == orderId) {
			// 			Object.assign(updatedOrder, order, updateDict);
			// 			updatedList.push(updatedOrder);
			// 		} else {
			// 			updatedList.push(order);
			// 		}
			// 	}
			// 	setStore({
			// 		orders: updatedList
			// 	});
			// },
			updateStatus: async (updateContact, contactId) => {
				console.log(updateContact, contactId);
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
