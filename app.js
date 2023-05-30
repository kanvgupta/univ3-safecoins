document.addEventListener('DOMContentLoaded', () => {
    const connectWalletButton = document.getElementById('connectWallet');
    const getBalanceButton = document.getElementById('getBalance');
    const ethBalance = document.getElementById('ethBalance');
  
    let web3Wrapper;
  
    const fetchEthBalance = async () => {
      const provider = web3Wrapper.getEthersProvider();
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      ethBalance.textContent = `Balance: ${ethers.utils.formatEther(balance)}`;
    };
  
    const connectWallet = async () => {
      web3Wrapper = new Web3Wrapper(window.ethereum);
      getBalanceButton.disabled = false;
    };
  
    connectWalletButton.addEventListener('click', connectWallet);
    getBalanceButton.addEventListener('click', fetchEthBalance);
  });