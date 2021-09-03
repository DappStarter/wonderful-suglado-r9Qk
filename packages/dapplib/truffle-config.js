require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purpose install derive blue similar'; 
let testAccounts = [
"0xf57dd65c02ff01a54909f22fffb61f18be67b0f391180ec3c8a7790a04d2359b",
"0xbeda2c4be99539d01ef57d488628d1b46d118594e15f10dc0a96d429048fc51d",
"0x81550b839e9d85097259b689308481215380378208f8c2486774f19676c98327",
"0x0d15a1797ee81552c1a70c327e0184e8e1a480ecc1ae46e1693b7330cf55d958",
"0x269cf7bbf15247145dcd56b2a324c92278f99eda7d9208ab888e686e470586f0",
"0xa424d9098782400830ff53b741bca588da63a742dcd59e327d825464d48954f4",
"0x8ef006b77337868243155f19ce1e2859e4b838085d042482109f10251928a533",
"0xd843b84fd0ef701543158bba13e5b798d0b28119eb895642e1ff5673ef516bb4",
"0x7132ae52dc50c77c66c3f80bcdad3cb3f624e8b10509158d781ba44ce4d4af8c",
"0xeb9156a2844606890cc836466d0b1600edbd58a1ab48341923d2d6f320b52b63"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

