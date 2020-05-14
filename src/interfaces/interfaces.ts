export interface OptionItem {
    id : number;
    text : string;
    checked: boolean;
}

export interface MenuItem{
    name : string;
    redirectTo : string;
}

export interface Medicacio {
    id : number;
    nom : string;
    forma : number;
    dosi : string;
    usuari : number;
    franja : number;
    data : string;
}

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

export interface Vomits {
    id: number;
    usuari: number;
    afirmatiu: boolean;
    cops: number;
    descripcio: string;
    avui: boolean;
}

export interface Apetit {
    id: number;
    afirmatiu : boolean;
    esmorzarAcabat : number;
    dinarAcabat : number;
    soparAcabat : number;
    data : string;
    usuari : number;
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
    afirmatiu : boolean;
    vegades : number;
    escalaBristol : number;
    color : string;
    data : string;
    userId : string;
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

export interface Usuari {
    id: number;
    nom : string;
    primerCognom : string;
    segonCognom : string;
    correuElectronic : string;
}

export interface Nota {
    id: number;
    usuari : number;
    data : string;
    descripcio : string;
}