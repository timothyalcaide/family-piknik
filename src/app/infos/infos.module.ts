import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { InfosPageRoutingModule } from "./infos-routing.module";
import { InfosPage } from "./infos.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosPageRoutingModule,
    SharedModule,
  ],
  declarations: [InfosPage],
})
export class InfosPageModule {}
