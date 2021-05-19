require('dotenv').config();
const axios = require('axios');

const main = async () => {
  const api = axios.create({
    baseURL: process.env.TX_SEARCH_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // 1. Get the last 5 transactions on Polkadot mainnet
  // 2. Get 5 last transactions for an address
  // 3. Get all staking transactions for an address
};

main().catch((err) => {
  console.error(err);
}).finally(() => process.exit());