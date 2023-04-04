
const bip39Lib = require("bip39");
//const mnemonicToSeedSync = require("bip39");
const CryptoJS = require("crypto-js");


function create_mnemonics() {
  return (bip39Lib.generateMnemonic())
}



function store_password(password){

    let key = "DahabIsTheSecretKey";

    var cipher = CryptoJS.AES.encrypt(key, password);
    cipher = cipher.toString();
    return cipher;
}

function createWallet(password) {
        store_password(password);
        const length = 128
        const my_mnemonic = create_mnemonics();
        return my_mnemonic;
        /*
        const my_seed = await create_seed(my_mnemonic)
        create_wallet_sol(my_seed, password, length);
        create_wallet_cspr(my_seed, password, length);
        create_wallet_eth(my_mnemonic, password, length);
        create_wallet_polygon(password, length);
        */
      
}

module.exports = {
    createWallet
}