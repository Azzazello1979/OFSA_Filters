import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterDefinitionPageComponent } from './filter-definition-page/filter-definition-page.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  declarations: [AppComponent, FilterDefinitionPageComponent, FormArrayComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
