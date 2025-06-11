const crypto = require("crypto")

let text = `
    harkirat => Raman | Rs 100
    Ram => Ankit | Rs 10
`

let nonce = 0
let prefix = "000000"

while(true){
    let message = text+nonce
    let hash = crypto.createHash('sha256').update(message).digest('hex')
    if(hash.startsWith(prefix)){
        console.log(hash, nonce)
        break
    }
    nonce+=1
}