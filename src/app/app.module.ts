import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KisilerPageComponent } from './views/kisiler/kisiler-page/kisiler-page.component';
import { KisilerListComponent } from './views/kisiler/kisiler-list/kisiler-list.component';
import { KisilerCreateComponent } from './views/kisiler/kisiler-create/kisiler-create.component';
import { KisilerEditComponent } from './views/kisiler/kisiler-edit/kisiler-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    KisilerPageComponent,
    KisilerListComponent,
    KisilerCreateComponent,
    KisilerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      enableHtml: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
