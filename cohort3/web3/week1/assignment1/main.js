const crypto = require('crypto');

const prefix = "00000"
// const test_message = "100xDevs"
let number = 0
while(true){
    // let number = 0;
    // let message = number
    let hash = crypto.createHash('sha256').update(number+"").digest('hex')
    if(hash.startsWith(prefix)){
        console.log(hash,number)
        break;
    }
    number+=1;
}