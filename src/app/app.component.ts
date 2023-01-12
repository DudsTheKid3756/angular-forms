import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormCheckbox } from "./dynamic-forms/models/form-checkbox";
import { FormDropdown } from "./dynamic-forms/models/form-dropdown";
import { FormInputBase } from "./dynamic-forms/models/form-input-base";
import { FormTextbox } from "./dynamic-forms/models/form-textbox";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "reactive-forms";
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      country: new FormControl(null),
      gender: new FormControl(null),
      hobbies: new FormControl(null),
    });
  }

  onSubmit() {}

  myForm: FormInputBase<string | boolean>[] = [
    new FormTextbox({
      key: "title",
      label: "Title",
      type: "text",
      required: true,
    }),

    new FormTextbox({
      key: "name",
      label: "Name",
      placeholder: "Jon Tron",
      type: "text",
      required: true,
    }),

    new FormDropdown({
      key: "animal",
      label: "Favorite animal",
      options: [
        { key: "cat", value: "Cat" },
        { key: "dog", value: "Dog" },
      ],
    }),

    new FormCheckbox({
      key: "readAgreement",
      label: "Read agreement?",
      required: true,
    }),
  ];

  myForm2: FormInputBase<string | boolean>[] = [
    new FormTextbox({
      key: "mom",
      label: "My mom",
      type: "text",
      placeholder: "KlargSpleem",
      required: true,
    }),

    new FormDropdown({
      key: "blorf",
      label: "Blorf",
      options: [
        { key: "ooglk", value: "Ooglk" },
        { key: "yowlbloof", value: "Yowlbloof" },
        { key: "ckroomdumv", value: "cKroomdumv" },
        { key: "zaklsplorff", value: "ZaklsPlorff" },
      ],
    }),

    new FormCheckbox({
      key: "shleem",
      label: "Shleem??",
      required: true,
    }),

    new FormCheckbox({
      key: "glimpf",
      label: "Glimpf??",
      required: false,
    }),
  ];
}
