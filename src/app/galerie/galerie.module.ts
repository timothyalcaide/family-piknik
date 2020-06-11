import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { GaleriePageRoutingModule } from "./galerie-routing.module";
import { GaleriePage } from "./galerie.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriePageRoutingModule,
    SharedModule,
  ],
  declarations: [GaleriePage],
})
export class GaleriePageModule {}
