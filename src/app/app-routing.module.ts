import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registre-simptomes',
    loadChildren: () => import('./pages/registre-simptomes-pages/registre-simptomes/registre-simptomes.module').then( m => m.RegistreSimptomesPageModule)
  },
  {
    path: 'reestrenyiment',
    loadChildren: () => import('./pages/registre-simptomes-pages/reestrenyiment/reestrenyiment.module').then( m => m.ReestrenyimentPageModule)
  },
  {
    path: 'diarrees',
    loadChildren: () => import('./pages/registre-simptomes-pages/diarrees/diarrees.module').then( m => m.DiarreesPageModule)
  },
  {
    path: 'fatiga',
    loadChildren: () => import('./pages/registre-simptomes-pages/fatiga/fatiga.module').then( m => m.FatigaPageModule)
  },
  {
    path: 'canvis-bucals',
    loadChildren: () => import('./pages/registre-simptomes-pages/canvis-bucals/canvis-bucals.module').then( m => m.CanvisBucalsPageModule)
  },
  {
    path: 'nausees-vomits',
    loadChildren: () => import('./pages/registre-simptomes-pages/nausees-vomits/nausees-vomits.module').then( m => m.NauseesVomitsPageModule)
  },
  {
    path: 'dolor',
    loadChildren: () => import('./pages/registre-simptomes-pages/dolor/dolor.module').then( m => m.DolorPageModule)
  },
  {
    path: 'nutricio',
    loadChildren: () => import('./pages/nutricio/nutricio.module').then( m => m.NutricioPageModule)
  },
  {
    path: 'portal-informatiu',
    loadChildren: () => import('./pages/portal-informatiu/portal-informatiu.module').then( m => m.PortalInformatiuPageModule)
  },
  {
    path: 'signes-vitals',
    loadChildren: () => import('./pages/signes-vitals/signes-vitals.module').then( m => m.SignesVitalsPageModule)
  },
  {
    path: 'colostomies',
    loadChildren: () => import('./pages/colostomies/colostomies.module').then( m => m.ColostomiesPageModule)
  },
  {
    path: 'comunitat',
    loadChildren: () => import('./pages/comunitat/comunitat.module').then( m => m.ComunitatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'missatges',
    loadChildren: () => import('./pages/missatges/missatges.module').then( m => m.MissatgesPageModule)
  },
  {
    path: 'dades-registrades',
    loadChildren: () => import('./pages/dades-registrades/dades-registrades.module').then( m => m.DadesRegistradesPageModule)
  },
  {
    path: 'medicacio',
    loadChildren: () => import('./pages/medicacio-pages/medicacio/medicacio.module').then( m => m.MedicacioPageModule)
  },
  {
    path: 'registre-usuari',
    loadChildren: () => import('./pages/registre-usuari/registre-usuari.module').then( m => m.RegistreUsuariPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'esdeveniments',
    loadChildren: () => import('./pages/esdeveniments/esdeveniments.module').then( m => m.EsdevenimentsPageModule)
  },
  {
    path: 'formulari-medicacio',
    loadChildren: () => import('./pages/medicacio-pages/formulari-medicacio/formulari-medicacio.module').then( m => m.FormulariMedicacioPageModule)
  },
  {
    path: 'bristol',
    loadChildren: () => import('./pages/bristol/bristol.module').then( m => m.BristolPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },  {
    path: 'nutricio-registre',
    loadChildren: () => import('./pages/dades-registrades-pages/nutricio-registre/nutricio-registre.module').then( m => m.NutricioRegistrePageModule)
  },
  {
    path: 'signes-vitals-registre',
    loadChildren: () => import('./pages/dades-registrades-pages/signes-vitals-registre/signes-vitals-registre.module').then( m => m.SignesVitalsRegistrePageModule)
  },
  {
    path: 'fatiga-registre',
    loadChildren: () => import('./pages/dades-registrades-pages/fatiga-registre/fatiga-registre.module').then( m => m.FatigaRegistrePageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
