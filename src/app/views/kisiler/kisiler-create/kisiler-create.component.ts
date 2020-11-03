import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Kisi } from 'src/app/core/models/kisi.model';
import { KisilerService } from 'src/app/core/services/kisiler.service';

@Component({
  selector: 'app-kisiler-create',
  templateUrl: './kisiler-create.component.html',
  styleUrls: ['./kisiler-create.component.css']
})
export class KisilerCreateComponent implements OnInit {

  kisi: Kisi;
  kisiForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KisilerCreateComponent>,
    private kisiService: KisilerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,

  ) {
  }

  ngOnInit(): void {
    console.log("create");
    this.kisiForm = this.formBuilder.group({
      adi: ['', [Validators.required]],
      soyadi: ['', [Validators.required]],
      telefon: ['', [Validators.required]],
      dogumTarihi: ['', [Validators.required]],
    });

  }

  get f() { return this.kisiForm.controls; }

  formValidation() {
    if (this.kisiForm.valid) {
      return true
    } else {
      this.toastr.warning('Formu kontrol ediniz.');
      return false
    }
  }

  kisiyiKaydet() {
    if (this.formValidation()) {
      let kisiModel = new Kisi();
      kisiModel.adi = this.f.adi.value;
      kisiModel.soyadi = this.f.soyadi.value;
      kisiModel.telefon = this.f.telefon.value;
      kisiModel.dogumTarihi = this.f.dogumTarihi.value;
      this.kisiService.Create(kisiModel)
        .pipe(first())
        .subscribe(
          response => {
            if (response === null) {
              this.toastr.error('Hata oluştu.')
            } else {
              this.toastr.success('Başarılı.')
            }
          },
          error => {
            this.toastr.error('Hata oluştu.')
          }
        )
    }
  }

  formuKapat() {
    this.dialogRef.close();
  }

}
