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
    nom : string;
    forma : number;
    dosi : string;
    usuari : number;
    franja : number;
    data : string;
}

export interface Nutricio {
    esmorzar : number;
    dinar : number;
    berenar : number;
    sopar : number;
    gotsAigua : number;
    data : string;
    usuari : number;
}

export interface Apetit {
    afirmatiu : boolean;
    esmorzarAcabat : number;
    dinarAcabat : number;
    soparAcabat : number;
    data : string;
    usuari : number;
}

export interface CanvisBucals {
    afirmatiu : boolean;
    simptomes : string;
    data : string;
    usuari : number;
}

export interface Diarrees {
    afirmatiu : boolean;
    vegades : number;
    escalaBristol : number;
    color : string;
    data : string;
    userId : string;
}

export interface Dolor {
    afirmatiu : boolean;
    localitzacio : string;
    fatiga : number;
    descripcio : string;
    quanApareix : string;
    data : string;
    usuari : number;
}

export interface Fatiga {
    afirmatiu : boolean;
    puntuacio : number;
    data : string;
    usuari : number;
}

export interface Reestrenyiment {
    afirmatiu : boolean;
    ultimCopVentre : string;
    colorUltimaFemta : string;
    escalaBristol : number;
    data : string;
    usuari : number;
}

export interface Usuari {
    nom : string;
    primerCognom : string;
    segonCognom : string;
    correuElectronic : string;
    password : string;
}

export interface Nota {
    usuari : number;
    descripcio : string;
    data : string;
}