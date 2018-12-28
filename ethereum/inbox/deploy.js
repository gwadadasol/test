const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require ('web3');
const {interface, bytecode} = require('./compile');

const RINKEBY_ENDPOINT = 'https://rinkeby.infura.io/v3/f9597fededad43c3a3e9caae0e60b84b';

const provider = new HDWalletProvider(
    'curious sell chef treat exit check patient eagle abandon meat satisfy release',
    RINKEBY_ENDPOINT
);

const web3 = new Web3(provider);

const INITIAL_VARIABLE = 'Hi There!';

// Function created to be able to use async for asynchronous call
const deploy  = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy  from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_VARIABLE]})
        .send({from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to ', result.options.address);

};

deploy();