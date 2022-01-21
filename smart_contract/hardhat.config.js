//

require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: "https://eth-ropsten.alchemyapi.io/v2/pa_p9pfkHrjPbSshklbgld1wN3mX4KkH",
			accounts: [
				`b0488ea0d28606755694975ccf6341ef95dcd0dcb47aefe626946485e191f2ae`,
			],
		},
	},
};
