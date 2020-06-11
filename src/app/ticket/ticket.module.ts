import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { TicketPageRoutingModule } from "./ticket-routing.module";
import { TicketPage } from "./ticket.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketPageRoutingModule,
    SharedModule,
  ],
  declarations: [TicketPage],
})
export class TicketPageModule {}
