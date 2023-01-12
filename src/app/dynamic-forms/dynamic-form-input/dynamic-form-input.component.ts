import { Component, Input } from "@angular/core";
import { FormInputBase } from "../models/form-input-base";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-form-input",
  templateUrl: "./dynamic-form-input.component.html",
  styleUrls: ["./dynamic-form-input.component.css"],
})
export class DynamicFormInputComponent {
  @Input() field!: FormInputBase<string | boolean>;
  @Input() form!: FormGroup;

  hasFieldError(): boolean | undefined {
    return (
      this.form.get(this.field.key)?.invalid &&
      (this.form.get(this.field.key)?.dirty ||
        this.form.get(this.field.key)?.touched)
    );
  }
}
