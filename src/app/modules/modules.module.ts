import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesHomeComponent } from './modules-home/modules-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ModulesHomeComponent, ModalComponent, AccordionComponent],
  imports: [CommonModule, ModulesRoutingModule, SharedModule],
  exports: [ModulesHomeComponent],
})
export class ModulesModule {}
