const Web3 = require('web3');
const contractABI = [PASTE_YOUR_SMART_CONTRACT_ABI_HERE];
const contractAddress = 'PASTE_YOUR_SMART_CONTRACT_ADDRESS_HERE';

// Connect to the Ethereum network using Web3
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Load the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example function to interact with the smart contract
async function login(fullName, registerNumber, metamaskId) {
  try {
    const accounts = await web3.eth.requestAccounts();
    const fromAccount = accounts[0];

    // Call the contract's login function
    await contract.methods.login(fullName, registerNumber, metamaskId).send({ from: fromAccount });

    // Do something after the function is called successfully
    console.log('Login successful');
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}

// Example usage
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fullName = document.getElementById('Fullname').value;
  const registerNumber = document.getElementById('Registerno').value;
  const metamaskId = document.getElementById('Metamaskid').value;

  await login(fullName, registerNumber, metamaskId);
});
