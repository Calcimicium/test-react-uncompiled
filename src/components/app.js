class App extends React.Component {
	render() {
		return React.createElement(
			React.Fragment,
			{},
			React.createElement(Header, { id: "main-header" }),
			React.createElement("div", { id: "main-container" }),
			React.createElement(Footer, { id: "main-footer" })
		)
	}
}
