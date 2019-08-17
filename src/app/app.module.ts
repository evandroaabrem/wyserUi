import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from '../app.routes';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { HttpModule } from '@angular/http';
import {TabViewModule} from 'primeng/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import {MenubarModule} from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {DialogModule} from 'primeng/dialog';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SegurancaModule } from './seguranca/seguranca.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  exports: [
    ToastyModule,ConfirmDialogModule
  ],
  imports: [
    BrowserModule, routing,
    FormsModule,
    HttpModule,
    ToastyModule.forRoot(),    
    ConfirmDialogModule,
    DialogModule,
    MenubarModule,
    CalendarModule,
    DataTableModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputMaskModule,
    TabViewModule,InputTextModule,ButtonModule,SegurancaModule///,
    ///RouterModule.forChild(routes)

  ],
  providers: [ConfigService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
