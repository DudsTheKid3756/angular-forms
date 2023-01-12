import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DynamicFormsComponent } from './dynamic-forms/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-forms/dynamic-form-input/dynamic-form-input.component';

@NgModule({
  declarations: [AppComponent, DynamicFormsComponent, DynamicFormInputComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
