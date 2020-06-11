import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full",
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: "carte",
    loadChildren: () =>
      import("./carte/carte.module").then((m) => m.CartePageModule),
  },
  {
    path: "musique",
    loadChildren: () =>
      import("./musique/musique.module").then((m) => m.MusiquePageModule),
  },
  {
    path: "ticket",
    loadChildren: () =>
      import("./ticket/ticket.module").then((m) => m.TicketPageModule),
  },
  {
    path: "galerie",
    loadChildren: () =>
      import("./galerie/galerie.module").then((m) => m.GaleriePageModule),
  },
  {
    path: "line-up",
    loadChildren: () =>
      import("./line-up/line-up.module").then((m) => m.LineUpPageModule),
  },
  {
    path: "infos",
    loadChildren: () =>
      import("./infos/infos.module").then((m) => m.InfosPageModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then((m) => m.ContactPageModule),
  },
  {
    path: "**",
    redirectTo: "about",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
