//Versão que mostra resultados a cada 10 minutos
var CoinKey = require('coinkey')

//const min = 0xd916000
//const max = 0xfffffff
//const wallets = ['12jbtzBb54r97TCwW3G1gCFoumpckRAPdY']
const wallets66 = ['13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so']
const wallets67 = ['1BY8GQbnueYofwSuFAT3USAhGjPrkxDdW9']
const wallets68 = ['1MVDYgVaSN6iKKEsbzRUAYFrYJadLYZvvZ']
const wallets69 = ['19vkiEajfhuZ8bs8Zu2jgmC6oqZbWqhxhG']
//const walletsC = ['']


const startTime = Date.now()
//let key = BigInt(min)
var fs = require('fs');

const crypto = require('crypto');

// Sequência de caracteres conhecidos
const characterSet1 = '23';
const characterSet2 = '0123456789abcdef';
const characterSet3 = '4567';
const characterSet4 = '89abcdef';


// Função para escolher um caractere aleatório da sequência 1
function chooseRandomCharacter1() {
  const randomBytes = crypto.randomBytes(1);
  const randomIndex = randomBytes[0] % characterSet1.length;
  return characterSet1.charAt(randomIndex);
}

// Função para escolher um caractere aleatório da sequência 2
function chooseRandomCharacter2() {
  const randomBytes = crypto.randomBytes(1);
  const randomIndex = randomBytes[0] % characterSet2.length;
  return characterSet2.charAt(randomIndex);
}

// Função para escolher um caractere aleatório da sequência 3
function chooseRandomCharacter3() {
    const randomBytes = crypto.randomBytes(1);
    const randomIndex = randomBytes[0] % characterSet3.length;
    return characterSet3.charAt(randomIndex);
  }

 function chooseRandomCharacter4() {
    const randomBytes = crypto.randomBytes(1);
    const randomIndex = randomBytes[0] % characterSet4.length;
    return characterSet4.charAt(randomIndex);
  }

// Exemplo de uso:
generateKeys();

async function generateKeys() {
    let continuarLoop = true;
    while (continuarLoop) {
        const randomCharacter1 = chooseRandomCharacter1()
        const randomCharacter1B = chooseRandomCharacter3()
        const randomCharacter1C = chooseRandomCharacter4()
        const randomCharacter1R = chooseRandomCharacter2()
        const randomCharacter2 = chooseRandomCharacter2()
        const randomCharacter3 = chooseRandomCharacter2()
        const randomCharacter4 = chooseRandomCharacter2()
        const randomCharacter5 = chooseRandomCharacter2()
        const randomCharacter6 = chooseRandomCharacter2()
        const randomCharacter7 = chooseRandomCharacter2()
        const randomCharacter8 = chooseRandomCharacter2()
        const randomCharacter9 = chooseRandomCharacter2()
        const randomCharacter10 = chooseRandomCharacter2()
        const randomCharacter11 = chooseRandomCharacter2()
        const randomCharacter12 = chooseRandomCharacter2()
        const randomCharacter13 = chooseRandomCharacter2()
        const randomCharacter14 = chooseRandomCharacter2()
        const randomCharacter15 = chooseRandomCharacter2()
        const randomCharacter16 = chooseRandomCharacter2()
        const randomCharacter17 = chooseRandomCharacter2()

        const min66 = "0x" + (randomCharacter1 + randomCharacter2 + randomCharacter3 + randomCharacter4 + randomCharacter5 + randomCharacter6 + randomCharacter7 + randomCharacter8 + randomCharacter9 + randomCharacter10 + randomCharacter11 + randomCharacter12 + randomCharacter13 + randomCharacter14 + randomCharacter15 + randomCharacter16 + randomCharacter17);
        const min67 = "0x" + (randomCharacter1B + randomCharacter2 + randomCharacter3 + randomCharacter4 + randomCharacter5 + randomCharacter6 + randomCharacter7 + randomCharacter8 + randomCharacter9 + randomCharacter10 + randomCharacter11 + randomCharacter12 + randomCharacter13 + randomCharacter14 + randomCharacter15 + randomCharacter16 + randomCharacter17);
        const min68 = "0x" + (randomCharacter1C + randomCharacter2 + randomCharacter3 + randomCharacter4 + randomCharacter5 + randomCharacter6 + randomCharacter7 + randomCharacter8 + randomCharacter9 + randomCharacter10 + randomCharacter11 + randomCharacter12 + randomCharacter13 + randomCharacter14 + randomCharacter15 + randomCharacter16 + randomCharacter17);
        const min69 = "0x1" + (randomCharacter1R + randomCharacter2 + randomCharacter3 + randomCharacter4 + randomCharacter5 + randomCharacter6 + randomCharacter7 + randomCharacter8 + randomCharacter9 + randomCharacter10 + randomCharacter11 + randomCharacter12 + randomCharacter13 + randomCharacter14 + randomCharacter15 + randomCharacter16 + randomCharacter17);


        let key66 = BigInt(min66)
        let key67 = BigInt(min67)
        let key68 = BigInt(min68)
        let key69 = BigInt(min69)

        //key = key + BigInt(parseInt(1))
        pkey66 = key66.toString(16)
        pkey67 = key67.toString(16)
        pkey68 = key68.toString(16)
        pkey69 = key69.toString(16)

        while (pkey66.length < 64){
            pkey66 = '0' + pkey66
        }
        while (pkey67.length < 64){
            pkey67 = '0' + pkey67
        }
        while (pkey68.length < 64){
            pkey68 = '0' + pkey68
        }
        while (pkey69.length < 64){
            pkey69 = '0' + pkey69
        }

        public66 = generatePublic(pkey66)
        public67 = generatePublic(pkey67)
        public68 = generatePublic(pkey68)
        public69 = generatePublic(pkey69)


        const agora = new Date();
        const horaagora1 = agora.getHours();
        const minutos1 = agora.getMinutes();
        const segundos1 = agora.getSeconds();
        if (minutos1 === 10 || minutos1 === 36 || minutos1 === 30 || minutos1 === 40 || minutos1 === 50 || minutos1 === 59){
            if (segundos1 < 1){
                console.log("Key 66: " + pkey66)
                console.log("Key 67: " + pkey67)
                console.log("Key 68: " + pkey68)
                console.log("Key 69: " + pkey69)
                console.log(horaagora1 + ':' + minutos1 + ':' + segundos1);
            }
        }
        for (let i = 0; i < wallets66.length; i++) {
            if (public66 == wallets66[i]) {
                console.log("Chave 66 encontrada: ");
                console.log(pkey66);
                console.log(public66);
                fs.writeFile("meuarquivo.txt", pkey66 + "   -->   " + public66, function(erro) {
                    if(erro) {
                        throw erro;
                    }
                    console.log("Arquivo salvo");
                 }); 
                continuarLoop = false; // Saia do loop
                break; // Saia do loop for
            }
        }
        for (let i = 0; i < wallets67.length; i++) {
            if (public67 == wallets67[i]) {
                console.log("Chave 67 encontrada: ");
                console.log(pkey67);
                console.log(public67);
                fs.writeFile("meuarquivo.txt", pkey67 + "   -->   " + public67, function(erro) {
                    if(erro) {
                        throw erro;
                    }
                    console.log("Arquivo salvo");
                 }); 
                continuarLoop = false; // Saia do loop
                break; // Saia do loop for
            }
        }
        for (let i = 0; i < wallets68.length; i++) {
            if (public68 == wallets68[i]) {
                console.log("Chave 68 encontrada: ");
                console.log(pkey68);
                console.log(public68);
                fs.writeFile("meuarquivo.txt", pkey68 + "   -->   " + public68, function(erro) {
                    if(erro) {
                        throw erro;
                    }
                    console.log("Arquivo salvo");
                 }); 
                continuarLoop = false; // Saia do loop
                break; // Saia do loop for
            }
        }
        for (let i = 0; i < wallets69.length; i++) {
            if (public69 == wallets69[i]) {
                console.log("Chave 69 encontrada: ");
                console.log(pkey69);
                console.log(public69);
                fs.writeFile("meuarquivo.txt", pkey69 + "   -->   " + public69, function(erro) {
                    if(erro) {
                        throw erro;
                    }
                    console.log("Arquivo salvo");
                 }); 
                continuarLoop = false; // Saia do loop
                break; // Saia do loop for
            }
        }
    }
}

function generatePublic(privateKey){
    _key = new CoinKey(Buffer.from(privateKey, 'hex'))
    _key.compressed = true
    return _key.publicAddress
}