import { Component, Input, OnInit } from "@angular/core";
import { FormInputBase } from "./models/form-input-base";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
})
export class DynamicFormsComponent implements OnInit {
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];

  form!: FormGroup;

  ngOnInit(): void {
    this.toFormGroup();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;
    alert("Submitted! Nice.");
  }

  private toFormGroup(): void {
    const group: { [key: string]: any } = {};

    this.formFields?.forEach((field: any) => {
      group[field.key] = field.required
        ? new FormControl(field.value || "", [
            ...field.validators,
            Validators.required,
          ])
        : new FormControl(field.value || "", field.validators);
    });
    this.form = new FormGroup(group);
  }
}
