import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { AboutPageRoutingModule } from "./about-routing.module";
import { AboutPage } from "./about.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    SharedModule,
  ],
  declarations: [AboutPage],
})
export class AboutPageModule {}
