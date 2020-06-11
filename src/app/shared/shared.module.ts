import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LayoutComponent } from "./layout/layout.component";

export const COMPONENTS = [LayoutComponent];
@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
