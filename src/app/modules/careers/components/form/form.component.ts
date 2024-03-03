import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { CustomValidatorsService } from '../../../../core/services/custom-validators/custom-validators.service';

@Component({
  selector: 'career-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  careersForm!: FormGroup;
  errorMessages = {
    first_name: {
      required: 'VALIDATION_MESSAGES.FIRST_NAME_REQUIRED',
    },
    middle_name: {
      required: 'VALIDATION_MESSAGES.MID_NAME_REQUIRED',
    },
    last_name: {
      required: 'VALIDATION_MESSAGES.LAST_NAME_REQUIRED',
    },
    email: {
      required: 'VALIDATION_MESSAGES.EMAIL_REQUIRED',
      notEmail: 'VALIDATION_MESSAGES.EMAIL_INVALID',
    },
    phone: {
      required: 'VALIDATION_MESSAGES.PHONE_NUMBER_REQUIRED',
      notPhone: 'VALIDATION_MESSAGES.INVALID_NUMBER',
    },
    CV: {
      required: 'VALIDATION_MESSAGES.CV',
      invalidEx: 'CAREERS.HANDEL_FORM_ERRORS.FORMAT',
    },
    link: {
      notURL: 'VALIDATION_MESSAGES.INVALID_URL',
      required: 'VALIDATION_MESSAGES.SOCIAL_LINK',
    },
    designation: {
      required: 'VALIDATION_MESSAGES.EMPLOYER.DESIGNATION_REQUIRED',
    },
    company: {
      required: 'VALIDATION_MESSAGES.EMPLOYER.COMPANY_REQUIRED',
    },
    start_date: {
      required: 'VALIDATION_MESSAGES.EMPLOYER.START_DATE_REQUIRED',
    },
    end_date: {
      required: 'VALIDATION_MESSAGES.EMPLOYER.END_DATE_REQUIRED',
    },
    summary: {
      required: 'VALIDATION_MESSAGES.EMPLOYER.SUMMARY_REQUIRED',
    },
    university: {
      required: 'VALIDATION_MESSAGES.EDUCATION.UNIVERSITY_REQUIRED',
    },
    graduation_year: {
      required: 'VALIDATION_MESSAGES.EDUCATION.GRADUATION_YEAR_REQUIRED',
      notNumberAndYear: 'VALIDATION_MESSAGES.INVALID_NUMBER_AND_YEAR',
      // minlength: 'VALIDATION_MESSAGES.INVALID_YEAR',
      // maxlength: 'VALIDATION_MESSAGES.INVALID_YEAR',
    },
    education_degree: {
      required: 'VALIDATION_MESSAGES.EDUCATION.EDUCATION_DEGREE_REQUIRED',
    },
    major: {
      required: 'VALIDATION_MESSAGES.EDUCATION.MAJOR_REQUIRED',
    },
    post_graduate: {
      required: 'VALIDATION_MESSAGES.EDUCATION.POST_REQUIRED',
    },
  };
  constructor(
    private builder: FormBuilder,
    private httpService: HttpService,
    private translationsServices: TranslationService,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {}
  isChecked: boolean = false;
  cvFile: any;
  linkUrl: any = '';
  @Input() pageId: any = '';
  formLoading: boolean = false;
  isArabic: boolean = false;
  errorMsg: string = '';
  message: String = '';

  private langUnsbscribe!: Subscription;

  ngOnInit(): void {
    this.InitForm();
    this.getLastLink();
  }

  // Init Form
  InitForm(): void {
    this.careersForm = this.builder.group({
      CV: new FormControl(null, {
        validators: [Validators.required],
      }),
      first_name: new FormControl(null, {
        validators: [Validators.required],
      }),
      middle_name: new FormControl(null, {
        validators: [Validators.required],
      }),
      last_name: new FormControl(null, {
        validators: [Validators.required],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, CustomValidatorsService.isEmail],
      }),

      phone: new FormControl(null, {
        validators: [Validators.required, CustomValidatorsService.isPhone],
      }),
      links: this.builder.array([this.getFormGroupLinks()]),
      experience: new FormArray([]),
      education: new FormArray([]),
    });
  }

  getAppLang() {
    this.langUnsbscribe = this.translationsServices.isArabic$.subscribe({
      next: (val) => {
        this.isArabic = val;
      },
    });
  }

  get eduFormArray() {
    return this.careersForm.controls['education'] as FormArray;
  }

  get experienceFormArray() {
    return this.careersForm.controls['experience'] as FormArray;
  }

  get linksFormArray() {
    return this.careersForm.controls['links'] as FormArray;
  }

  /* Return AbstractControl To Form Control */
  formControlData(formControl: any): FormControl {
    return this.careersForm.get(formControl) as FormControl;
  }

  formControlDataGernal(index: number, formControl: any, type: string) {
    if (type === 'education') {
      return (this.careersForm.controls['education'] as FormArray)
        .at(index)
        .get(formControl) as FormControl;
    } else if (type === 'experience') {
      return (this.careersForm.controls['experience'] as FormArray)
        .at(index)
        .get(formControl) as FormControl;
    } else if (type === 'links') {
      return (this.careersForm.controls['links'] as FormArray)
        .at(index)
        .get(formControl) as FormControl;
    }
    return new FormControl();
  }

  // get Form Group Education
  getFormGroupLinks() {
    return new FormGroup({
      link: new FormControl('', [CustomValidatorsService.isURL]),
    });
  }

  // get Form Group Education
  getFormGroup() {
    return new FormGroup({
      university: new FormControl('', Validators.required),
      graduation_year: new FormControl('', [
        Validators.required,
        CustomValidatorsService.isNumber,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      education_degree: new FormControl('', [Validators.required]),
      major: new FormControl('', [Validators.required]),
      post_graduate: new FormControl('', [Validators.required]),
    });
  }

  // get Form Group Education
  getFormGroupEmployer() {
    return new FormGroup({
      designation: new FormControl('', Validators.required),
      company: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      is_current: new FormControl(false),
      summary: new FormControl('', [Validators.required]),
    });
  }

  ifIsChecked(val: boolean, i: number) {
    const date = new Date();
    const control = (this.careersForm.controls['experience'] as FormArray).at(
      i
    );
    if (val) {
      control
        ?.get('end_date')
        ?.setValue(
          `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        );
    } else {
      control?.get('end_date')?.setValue('');
    }
    control.setValidators(Validators.required);
  }

  addNew(type: string, control: string) {
    let form: FormGroup;
    if (type === 'education') {
      form = this.getFormGroup();
    } else if (type === 'experience') {
      form = this.getFormGroupEmployer();
    } else if (type === 'links') {
      form = this.getFormGroupLinks();
    }
    (this.careersForm.get(type) as FormArray).push(form!);
  }
  removeOne(index: number, type: string) {
    let control = this.careersForm.controls[type] as FormArray;
    control.removeAt(index);
  }

  uploadImage(event: any) {
    const fileType = event.target.files[0].name.split('.').at(-1);
    if (fileType === 'pdf' || fileType === 'docx') {
      this.cvFile = event.target.files[0];
      this.careersForm.get('CV')?.setValue(this.cvFile);
    } else {
      this.careersForm.get('CV')?.setErrors({ CVError: true });
      this.careersForm.get('CV')?.markAllAsTouched();
    }
  }

  getLastLink() {
    const url = (this.careersForm.get('links') as FormArray).at(-1);
    return url.value['link'] && url.valid;
  }
  //  Notificatiion Message When send data sucsees and fail
  notificationMessage(messageEn: string, messageAr: string) {
    this.message = this.isArabic ? messageAr : messageEn;
    let notification = this.elRef.nativeElement.querySelector(
      '.notification-message'
    );
    this.renderer.setStyle(notification, 'opacity', 1);
    this.renderer.setStyle(notification, 'z-index', 10);

    setTimeout(() => {
      this.renderer.setStyle(notification, 'opacity', 0);
      this.renderer.setStyle(notification, 'z-index', -1);
    }, 3000);
  }

  handelFormErrors(error: HttpErrorResponse) {
    const errorArray = error.error;
    const filedError = errorArray.non_field_errors;
    const CVError = errorArray.CV;
    if (
      filedError &&
      filedError.includes('career with this email already exists .')
    ) {
      this.errorMsg = 'CAREERS.HANDEL_FORM_ERRORS.EMAIL_EXISTS';
    }
    if (CVError && CVError.includes("allowed format is :  'pdf', 'docx'")) {
      this.errorMsg = 'CAREERS.HANDEL_FORM_ERRORS.FORMAT';
    } else if (
      CVError &&
      CVError.includes('File too large. Size should not exceed 10 MiB.')
    ) {
      this.errorMsg = 'CAREERS.HANDEL_FORM_ERRORS.ZIZE';
    }
  }

  sendCv() {
    this.errorMsg = '';
    if (this.careersForm.invalid) {
      this.careersForm.markAllAsTouched();
      return;
    }
    this.formLoading = true;
    const body = this.careersForm.value;
    const control = body['links'];
    control.map((val: any, i: number) => {
      if (i === 0 && val.link === '') {
        body['links'] = [];
      }
      if (val.link === '') {
        control.splice(i, 1);
      }
      return control;
    });

    const formData: any = new FormData();
    formData.append('CV', this.cvFile);
    delete body['CV'];
    formData.append('data', JSON.stringify(body));
    this.httpService.post(`/api/career/${this.pageId}`, formData).subscribe({
      next: () => {
        this.careersForm.reset();
        this.formLoading = false;
        this.notificationMessage(
          'Data has been sent success',
          'تم ارسال الداتا بنجاح'
        );
      },
      error: (error) => {
        this.formLoading = false;
        this.handelFormErrors(error);
      },
    });
  }

  // To unSubscribe on all obserbvable
  ngOnDestroy(): void {
    if (this.langUnsbscribe) {
      this.langUnsbscribe.unsubscribe();
    }
  }
}
