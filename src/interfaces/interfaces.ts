// !Usuari
export interface Usuari {
    id: number;
    nom : string;
    primerCognom : string;
    segonCognom : string;
    correuElectronic : string;
}

// * Registre Simptomes Interfaces
export interface Vomits {
    id: number;
    usuari: number;
    afirmatiu: boolean;
    cops: number;
    descripcio: string;
    avui: boolean;
}
export interface CanvisBucals {
    id: number;
    afirmatiu : boolean;
    simptomes : string;
    data : string;
    usuari : number;
}

export interface Diarrees {
    id: number;
    usuari: number,
    afirmatiu : boolean;
    vegades : number;
    escalaBristol : number;
    color : number;
    data : string;
}

export interface Dolor {
    id: number;
    afirmatiu : boolean;
    localitzacio : string;
    valor : number;
    descripcio : string;
    quanApareix : string;
    data : string;
    usuari : number;
}

export interface Fatiga {
    id: number;
    afirmatiu : boolean;
    puntuacio : number;
    data : string;
    usuari : number;
}

export interface Reestrenyiment {
    id: number;
    afirmatiu : boolean;
    ultimCopVentre : string;
    colorUltimaFemta : string;
    escalaBristol : number;
    data : string;
    usuari : number;
}


// * Signes vitals
export interface SigneVitalItem {
    tipus: number;
    nom: string;
    descripcio: string;
    valor: number;
    valorSecundari: number;
    img: string;
}

export interface SigneVital {
    id: number;
    data: string;
    usuari: number;
    valor: number;
    valorSecundari: number;
    tipus: number;
}


// * Notes
export interface Nota {
    id: number;
    usuari : number;
    data : string;
    descripcio : string;
}


// * Nutricio
export interface Nutricio {
    id: number;
    esmorzar : number;
    dinar : number;
    berenar : number;
    sopar : number;
    gotsAigua : number;
    data : string;
    usuari : number;
}


// * Medicacio
export interface Medicacio {
    id : number;
    nom : string;
    forma : number;
    dosi : string;
    usuari : number;
    franja : number;
    data : string;
}

// * Comunitat
export interface Esdeveniment{
    id : number;
    data : Date;
    numeroTelefon : string;
    ubicacio : string;
    descripcio : string;
}

// * Others
export interface OptionItem {
    id : number;
    text : string;
    checked: boolean;
}

export interface MenuItem{
    name : string;
    redirectTo : string;
}

export interface ChartData {
    valor: number;
    label: string;
}

export interface PopoverItem {
    id: number;
    text: string;
}

// * Message
export interface Message {
    id: number;
    text: string;
    emisorId: number;
    receptorId: number;
    codiConversa: string;
}















