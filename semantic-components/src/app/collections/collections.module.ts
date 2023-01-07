import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import {SharedModule} from "../shared/shared.module";
import { YesnoPipe } from './yesno.pipe';
import { BioComponent } from './bio/bio.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    YesnoPipe,
    BioComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent
  ],
  exports: [],
    imports: [
        CommonModule,
        CollectionsRoutingModule,
        SharedModule
    ]
})
export class CollectionsModule { }
