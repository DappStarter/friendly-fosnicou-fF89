require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain social inflict infant flee tattoo'; 
let testAccounts = [
"0x18a08e3ee90670797b2b2059d17564e0eb9d05e743d780e858839bfe0cc362cf",
"0xe07641f67843f19e87c451bec62d9db4af90ed98d356b5f68a55dcb3498375ac",
"0xcfd43092e3f096a473f4169f581cf7dd6790ce6414967441fa787f6a5ade55e1",
"0xc5309f8308ddf1a08efe7b122b7b2546d6f108a5991048c3cea12ea34f74e0d8",
"0x9485d39f029ff0643c18e58ec561e1a2bf282f07d9084b390ade02a49b572425",
"0x869c961c77f73e5ea3bbdb1b36e05a9977dab45650307696b0f051926a55a693",
"0x8206ce2a70f1283823379f5f59143a33ad4c606a320e1ab50f8b9cf131230656",
"0x0f8aa8db822750db09da76ea18413de866ae474bb603fdf9d8e5af167c1c379c",
"0x3aeada2bbf20e46134ed6c4e3df67b210f7e81f722c44288fd55f100c47782ec",
"0xa6e07cd20a7901a112b341b0e564d89d6709297b5755683d21caf2be97f8a83d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


