const {ethers,verifyMessage} = require("ethers")

const genWallet = () => {
    const wallet = ethers.Wallet.createRandom()
    console.log("Address: ", wallet.address)
    console.log("Public Key: ", wallet.publicKey)
    console.log("Private Key: ", wallet.privateKey)
    return wallet
}

const message = "Hello, this is a test message"
// const wallet = genWallet()

const signMessage = async(message) => {
    const wallet = genWallet()
    const signature = await wallet.signMessage(message)
    // console.log(sign) 
    return {signature, address: wallet.address};
}

// sign = signMessage(message)

const verifier = async(message) => {
    const {signature, address} = await signMessage(message)
    const recoveredAddress = await verifyMessage(message,signature)
    console.log("Match: ",recoveredAddress===address)

    //verifyMessage gives us the public address from the message and signature 
}


verifier(message)

const uint8ArrayMessage = new TextEncoder().encode(message)
console.log(uint8ArrayMessage)

signMessage(uint8ArrayMessage)
verifier(uint8ArrayMessage)