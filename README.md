# My Colon (front-end)

_Aplicació desenvolupada per al treball de fi de grau_

## Inici

_Aquestes instruccions et permetràn obtenir una còpia del projecte en funcionament a la teva màquina en local per propòsits de desenvolupament i proves._

Mira **Deployment** per coneixer com fer el desplegament del projecte.

### Pre-requisits 📋

_Cal tenir instal·lat el següent:_

* [Node.js](https://nodejs.org/es/)

### Instal·lació 🔧
_Per instal·lar cordova cal executar el següent:_
```
npm install -g cordova
```
_Per instal·lar el framework ionic a la seva última versió:_
```
npm install -g ionic
```

_Per instal·lar el projecte cal executar el següent (a la carpeta del projecte)_

```
npm install
```

## Desplegament 📦

_Per realitzar el desplegament cal executar la següent comanda_
```
ionic serve
```
_Per poder fer la conversió a la plataforma android i ios:_
```
ionic cordova build android
```

## Construït amb 🛠️

* [NPM](https://www.npmjs.com/) - Gestor de dependències
* [Ionic](https://ionicframework.com/) - Framework web utilitzat
* [Angular](https://angular.io/) - Framework web utilitzat

## Autor ✒️

* **Rubén Gil** - [rgili](https://github.com/rgili)

## Altres  😺 
A l'arxiu data.service.ts
Per fer peticions al backend de Heroku:
```
  prefix: string = DEV_ENDPOINT;
  // prefix: string = HEROKU_ENDPOINT;
```
Per fer peticions en l'entron de proves locals:
```
  prefix: string = DEV_ENDPOINT;
  // prefix: string = HEROKU_ENDPOINT;
```
## Possible error executant ```ionic cordova build android``` ❌
Seguir les següents passes si es dona l'error amb el plugin 'proposal numeric separator'
1. Executar  ```npm i @babel/plugin-proposal-numeric-separator```
2. Anar a  ```node_modules/@babel/preset-env/lib/available-plugins.js```
3. Afegir ```var _pluginTransformNumericSeperator = _interopRequireDefaxult(require("@babel/plugin-proposal-numeric-separator"));```
4. I afegir ```"proposal-numeric-separator": _pluginTransformNumericSeperator to default variable```

## Codi del backend 🗂
_Backend de l'aplicació al següent [repositori](https://github.com/rgili/my-colon-backend)_

---
