// import Web3, { utils } from "web3";
const newWeb3 = new Web3(window.ethereum);
// console.log(newWeb3,111,Web3.utils)
function parseChainId(chainId) {
    return Number.parseInt(chainId, 16);
}

async function activate(desiredChainIdOrChainParameters) {
    await window.ethereum.enable();
    return Promise.all([
        window.ethereum.request({ method: "eth_chainId" }),
        window.ethereum.request({ method: "eth_requestAccounts" }),
    ])
        .then(([chainId, accounts]) => {
            const receivedChainId = parseChainId(chainId);
            const desiredChainId =
                typeof desiredChainIdOrChainParameters === "number"
                    ? desiredChainIdOrChainParameters
                    : desiredChainIdOrChainParameters?.chainId;

            if (!desiredChainId || receivedChainId === desiredChainId) {
                return {
                    chainId: receivedChainId,
                    accounts,
                };
            }

            const desiredChainIdHex = `0x${desiredChainId.toString(16)}`;
            return window.ethereum
                .request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: desiredChainIdHex }],
                })
                .catch((error) => {
                    if (
                        error.code === 4902 &&
                        typeof desiredChainIdOrChainParameters !== "number"
                    ) {
                        return window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    ...desiredChainIdOrChainParameters,
                                    chainId: desiredChainIdHex,
                                },
                            ],
                        });
                    } else {
                        throw error;
                    }
                })
                .then(() => activate(desiredChainId));
        })
        .catch((error) => {
            throw error;
        });
}

async function getEtherBalance(address) {
    var balance = await newWeb3.eth.getBalance(address);
    var etherBalance = newWeb3.utils.fromWei(balance, "ether");
    return etherBalance;
}
function isLogin() {
    newWeb3.eth.getCoinbase();
    if (!newWeb3.eth.coinbase) {
        window.alert("Please LOGIN MetaMask first.");
        return;
    } else {
        console.log("MetaMask is Login.");
    }
}
