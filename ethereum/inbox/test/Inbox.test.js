const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // Web3 starts with capital letter because this is a constructor

const web3 = new Web3(ganache.provider());

const {interface, byteCode} = require('../compile');

let accounts;
let inbox;

beforeEach( async () => {
   // Get a list of all accounts


    // Old code written as a promesse
   //  web3.eth.getAccounts()
   //      .then(fetchedAccounts => {
   //          console.log(fetchedAccounts);
   //      })


    // New code with asynch syntax
    // add await when call the function
    // add asyn  in front of the function  ( just after the beforeEach)
    accounts = await web3.eth.getAccounts();

   // Use  on of cthose accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: byteCode, arguments: ['Hi There!']})
        .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox',  () => {
    it ('deploys a contract', () => {
        console.log(inbox);
    })
});


// Moka test sample
// class Car{
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'wroom';
//     }
// }
//
//
// let car;
//
// beforeEach(() => {
//     car = new Car();
// })
//
// describe('Car', () => {
//     it('can park', () => {
//        assert.equal(car.park(), 'stopped');
//     });
//     it('can drive', () => {
//         assert.equal(car.drive(), 'wroom');
//
//     })
// });