import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContact.js";
import { EditContact } from "./views/editContact.js";
import { CustManage } from "./views/custManage.js";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/index.html" component={Contacts} />
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/crm" component={CustManage} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/edit/:contactId/:contactName" component={EditContact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
