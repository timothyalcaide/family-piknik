import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { MusiquePageRoutingModule } from "./musique-routing.module";
import { MusiquePage } from "./musique.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusiquePageRoutingModule,
    SharedModule,
  ],
  declarations: [MusiquePage],
})
export class MusiquePageModule {}
