const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // Web3 starts with capital letter because this is a constructor

const web3 = new Web3(ganache.provider());


// UPDATE THESE TWO LINES RIGHT HERE!!!!! <-----------------
// const provider = ganache.provider();
// const web3 = new Web3(provider);


const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

const INITIAL_VARIABLE = 'Hi There!';

const RINKEBY _ENDPOINT = 'https://rinkeby.infura.io/v3/f9597fededad43c3a3e9caae0e60b84b';

beforeEach( async () => {
   // Get a list of all accounts

    // New code with asynch syntax
    // add await when call the function
    // add asyn  in front of the function  ( just after the beforeEach)
    accounts = await web3.eth.getAccounts();

   // Use  on of cthose accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_VARIABLE]})
        .send({from: accounts[0], gas: '1000000'});

    // ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
    // inbox.setProvider(provider);
});

describe('Inbox',  () => {
    it ('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
    it ('has a default message', async () => {
        const message = await inbox.methods.message().call(); // Call the message method to read the message
        assert.equal(message, INITIAL_VARIABLE);
    });
    it ('can change the message', async () => {
        await inbox.methods.setMessage('Bye').send({from: accounts[0]})
        const message = await inbox.methods.message().call(); // Call the message method to read the message
        assert.equal(message, 'Bye');
    })
});
