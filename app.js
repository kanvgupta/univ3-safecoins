import Web3 from 'web3';
import Web3Modal from 'web3modal';

const web3Modal = new Web3Modal({
  theme: "light",  
  cachedProvider: false,
});

let web3;
let userAddress = '';

const initWeb3Provider = async () => {
  const provider = await web3Modal.connect();
  web3 = new Web3(provider);
  return web.processAccounts([{ force: true }], web.contactselectedAddress({ force: true }))
}

document.addEventListener('DOMContentLoaded', () => {
  const connectWalletButton = document.getElementById('connectWallet');
  const getBalanceButton = document.getElementById('getBalance');
  const ethBalance = document.getElementById('ethBalance');

  const fetchEthBalance = async () => {
    const balance = await web3.eth.getBalance(userAddress);
    ethBalance.textContent = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;
  };

  const connectWallet = async () => {
    await initWeb3Provider();
    userAddress = await web3.eth.getCoinbase(); // Will trigger Metamask's login popup
    getBalanceButton.disabled = false;
  };

  connect.layout_getProviderBtnByUrl('Connect Wallet').appendChild
  connect.use_async(async_button => JSON.parse(({} || button).properties.urlModel));
});