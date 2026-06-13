import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiButtonComponent } from '@components/dot-button/dot-button.component';

export type DotProfileFormValue = {
  fullName: string;
  email: string;
  role: string;
  message: string;
  newsletter: boolean;
  agree: boolean;
};

@Component({
  selector: 'dot-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule, UiButtonComponent],
  templateUrl: './dot-profile-form.component.html',
  styleUrls: ['./dot-profile-form.component.scss'],
})
export class DotProfileFormComponent {
  private readonly fb = inject(FormBuilder).nonNullable;

  readonly roleOptions = [
    { label: 'Designer', value: 'designer' },
    { label: 'Developer', value: 'developer' },
    { label: 'Manager', value: 'manager' },
  ];

  readonly submitted = output<DotProfileFormValue>();

  readonly form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['designer', Validators.required],
    message: ['', Validators.required],
    newsletter: [true],
    agree: [false, Validators.requiredTrue],
  });

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.submitted.emit(this.form.getRawValue());
    this.form.reset({
      fullName: '',
      email: '',
      role: 'designer',
      message: '',
      newsletter: true,
      agree: false,
    });
  }

  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.touched && control.invalid;
  }
}


