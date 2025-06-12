// import {generateMnemonic, mnemonicToSeedSync } from "bip39"
const bip39 = require("bip39")
// const nacl = require("tweetnacl")
// const ed25519_hd_key = require("secp256k1-hd-key")
const {ethers} = require("ethers")

const mnemonicPhrase = bip39.generateMnemonic();
// console.log(mnemonic)
// const seed = bip39.mnemonicToSeedSync(mnemonic)
// console.log(seed)
// const mnemonic = ethers.Mnemonic.fromPhrase(mnemonicPhrase)
// const hdNode = ethers.HDNodeWallet.fromMnemonic(mnemonic);

const seed = bip39.mnemonicToSeedSync(mnemonicPhrase)
const rootNode = ethers.HDNodeWallet.fromSeed(seed)


for(let i=0;i<4;i++){
    const path = `m/44'/60'/${i}'/0/0'`
    // const derivedSeed = ed25519_hd_key.derivePath(path, seed.toString('hex')).key;
    const wallet = rootNode.derivePath(path)
    // const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    // privateKey = new ethers.Wallet(secret)
    console.log('Public Key: ',wallet.address);
    console.log('Private Key: ',wallet.privateKey);
}