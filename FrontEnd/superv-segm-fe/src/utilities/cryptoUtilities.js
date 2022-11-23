import sha256 from 'crypto-js/sha256';
import enc_base64 from "crypto-js/enc-base64";

import Globals from '../Globals';

const CryptoUtilities = {
    hashSHA256wN: function(src_string) {
        return sha256(Globals.CRYPTO_NONCE + src_string).toString(enc_base64);
    }
};

export default CryptoUtilities;