import { FORMA_MEDICACIO } from 'src/app/helpers/constants';

export function mapMedicacioForma(forma){
    switch(forma){
        case FORMA_MEDICACIO.CAPSULA.id:
            return FORMA_MEDICACIO.CAPSULA.text;
        case FORMA_MEDICACIO.INHALADOR.id:
            return FORMA_MEDICACIO.INHALADOR.text;
        case FORMA_MEDICACIO.UNGUENT.id:
            return FORMA_MEDICACIO.UNGUENT.text;
        case FORMA_MEDICACIO.PEGAT.id:
            return FORMA_MEDICACIO.PEGAT.text;
        case FORMA_MEDICACIO.INJECCIO.id:
            return FORMA_MEDICACIO.INJECCIO.text;
        case FORMA_MEDICACIO.GOTES.id:
            return FORMA_MEDICACIO.GOTES.text;
        case FORMA_MEDICACIO.PASTILLA.id:
            return FORMA_MEDICACIO.PASTILLA.text;
    }
}

export function emptyString(msg){
    if(msg === undefined)
        return false;

    return msg.trim().length === 0;
}

export function validateEmail(email) {
    if(email == undefined)
        return false;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}