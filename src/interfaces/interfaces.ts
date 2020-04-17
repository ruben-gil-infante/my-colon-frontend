export interface MenuItem{
    name : string;
    redirectTo : string;
}

export interface Medicacio {
    nom : string;
    tipus : number;
    dosi : number;
    userId : string;
    horari : string;
    data : Date;
}

export interface Nutricio {
    usuariId : string;
    esmorzar : number;
    dinar : number;
    berenar : number;
    sopar : number;
    gotsAigua : number;
    data : Date;
}

export interface Apetit {
    afirmatiu : boolean;
    esmorzarAcabat : number;
    dinarAcabat : number;
    soparAcabat : number;
    data : Date;
    userId : string;
}

export interface CanvisBucals {
    afirmatiu : boolean;
    simptomes : string;
    userId : string;
    data : Date;
}

export interface Diarrees {
    afirmatiu : boolean;
    vegades : number;
    escalaBristol : number;
    color : string;
    data : Date;
    userId : string;
}

export interface Dolor {
    afirmatiu : boolean;
    localitzacio : string;
    fatiga : number;
    descripcio : string;
    quanApareix : string;
    data : Date;
    userId : string;
}

export interface Fatiga {
    afirmatiu : boolean;
    puntuacio : number;
    data : Date;
    userId : string;
}

export interface Reestrenyiment {
    afirmatiu : boolean;
    ultimCopVentre : string;
    colorUltimaFemta : string;
    escalaBristol : number;
    data : Date;
    userId : string;
}

export interface Usuari {
    nom : string;
    primerCognom : string;
    segonCognom : string;
    correuElectronic : string;
    password : string;
}