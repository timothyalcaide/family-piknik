import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { CartePageRoutingModule } from "./carte-routing.module";
import { CartePage } from "./carte.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartePageRoutingModule,
    SharedModule,
  ],
  declarations: [CartePage],
})
export class CartePageModule {}
