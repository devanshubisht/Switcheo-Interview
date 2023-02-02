const { ethers } = require("ethers");

const ADDR = "0x5FbDB2315678afecb367f032d93F642f64180aa3";   // your contract address
const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        }
      ],
      "name": "getBalances",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ],
          "internalType": "struct TokenBalances.TokenBalance[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];    // your contract ABI

const ADDRESS = "0x6914fc70fac4cab20a8922e900c4ba57feecf8e1"; // some wallet address with token balance
const tokens = [
	"0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
	"0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);
	
	return balances;
};

test().then(console.log);