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
import { Home } from "./views/home.js";

export const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="h-100">
			<BrowserRouter basename={basename}>
				<div className="h-100">
					<Switch>
						<Route exact path="/index.html" component={Home} />
						<Route exact path="/">
							<Home />
						</Route>
						<div>
							<Navbar />
							<Route exact path="/contacts" component={Contacts} />
							<Route exact path="/crm" component={CustManage} />
							<Route exact path="/add" component={AddContact} />
							<Route exact path="/edit/:contactId/:contactName" component={EditContact} />
						</div>
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
