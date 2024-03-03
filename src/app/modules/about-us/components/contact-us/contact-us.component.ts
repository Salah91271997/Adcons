import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomValidatorsService } from 'src/app/core/services/custom-validators/custom-validators.service';
import { HttpService } from 'src/app/core/services/http/http.service';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { environment } from 'src/environments/environment';
import { Aboutus } from '../../interfaces/about-us';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  @Input() contactUs: Aboutus | undefined;
  imgUrl = environment.baseUrl;
  contactForm!: FormGroup;
  loadding: boolean = false;
  messageState: string = '';
  isArabic: boolean = false;
  subscripe$: Subscription | undefined;
  private langUnsbscribe$: Subscription | undefined;
  errorMessages = {
    name: {
      required: 'VALIDATION_MESSAGES.FIRST_NAME_REQUIRED',
    },
    email: {
      required: 'VALIDATION_MESSAGES.EMAIL_REQUIRED',
      notEmail: 'VALIDATION_MESSAGES.EMAIL_INVALID',
    },

    message: {
      required: 'VALIDATION_MESSAGES.MESSAGE',
    },
  };
  constructor(
    private builder: FormBuilder,
    private http: HttpService,
    private translationsServices: TranslationService
  ) {}

  ngOnInit(): void {
    this.InitForm();
    this.appLang();
  }

  // Get App Lang
  appLang() {
    this.subscripe$ = this.langUnsbscribe$ =
      this.translationsServices.isArabic$.subscribe({
        next: (val) => {
          this.isArabic = val;
        },
      });
  }

  // submit form

  onSubmit() {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.loadding = true;

    this.http.post('/api/contact-us', this.contactForm.value).subscribe({
      next: () => {
        this.contactForm.reset();
        this.loadding = false;
        this.messageState = this.isArabic
          ? 'تم إرسال البيانات الخاصة بك'
          : 'Thank you ,Your data has been sent';
        setTimeout(() => {
          this.messageState = '';
        }, 2000);
      },
      error: (error: HttpErrorResponse) => {
        this.loadding = false;

        this.messageState = this.isArabic
          ? 'حدث خطأ ما ,الرجاء المحاوله مره اخري'
          : 'somethins went wrong, please try again';
      },
    });
  }
  /* Return AbstractControl To Form Control */
  formControlData(formControl: any): FormControl {
    return this.contactForm.get(formControl) as FormControl;
  }

  // Init Form
  InitForm(): void {
    this.contactForm = this.builder.group({
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, CustomValidatorsService.isEmail],
      }),

      message: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
}
