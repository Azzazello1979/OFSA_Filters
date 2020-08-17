import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterDefinitionPageComponent } from './filter-definition-page/filter-definition-page.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FiltersMainPageComponent } from './filters-main-page/filters-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterDefinitionPageComponent,
    FormArrayComponent,
    FiltersMainPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
