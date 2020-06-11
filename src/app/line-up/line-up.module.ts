import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { LineUpPageRoutingModule } from "./line-up-routing.module";
import { LineUpPage } from "./line-up.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineUpPageRoutingModule,
    SharedModule,
  ],
  declarations: [LineUpPage],
})
export class LineUpPageModule {}
