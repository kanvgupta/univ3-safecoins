document.addEventListener('DOMContentLoaded', () => {
    const Web3Modal = window.Web3Modal.default;

    const connectWalletButton = document.getElementById('connectWallet');
    const getBalanceButton = document.getElementById('getBalance');
    const ethBalance = document.getElementById('ethBalance');

    let web3;
    let userAddress = '';

    const web3Modal = new Web3Modal({
        cacheProvider: false,
        theme: "light",
    });

    connectWalletButton.addEventListener('click', async () => {
        const provider = await web3Modal.connect();
        web3 = new window.Web3(provider);

        try {
            const accounts = await web3.eth.getAccounts();
            userAddress = accounts[0];
            getBalanceButton.disabled = false;
        } catch (error) {
            console.log('Error:', error.message);
        }
    });

    getBalanceButton.addEventListener('click', async () => {
        try {
            const balance = await web3.eth.getBalance(userAddress);
            const ethAmount = web3.utils.fromWei(balance, 'ether');
            ethBalance.textContent = `Balance: ${ethAmount} ETH`;
        } catch (error) {
            console.log('Error:', error.message);
        }
    });
});