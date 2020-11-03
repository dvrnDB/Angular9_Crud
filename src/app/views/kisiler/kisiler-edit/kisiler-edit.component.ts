import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Kisi } from 'src/app/core/models/kisi.model';
import { KisilerService } from 'src/app/core/services/kisiler.service';

@Component({
  selector: 'app-kisiler-edit',
  templateUrl: './kisiler-edit.component.html',
  styleUrls: ['./kisiler-edit.component.css']
})
export class KisilerEditComponent implements OnInit {

  kisiId: string;
  kisi: Kisi;
  kisiForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KisilerEditComponent>,
    private route: ActivatedRoute,
    private kisiService: KisilerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,

  ) {
    this.kisiId = data.id;
  }

  ngOnInit(): void {
    console.log("edit");

    this.kisiForm = this.formBuilder.group({
      adi: ['', [Validators.required]],
      soyadi: ['', [Validators.required]],
      telefon: ['', [Validators.required]],
      dogumTarihi: ['', [Validators.required]],
    });

    this.getKisi();
  }

  getKisi() {
    this.kisiService.GetById(this.kisiId)
      .pipe(first())
      .subscribe(response => {
        this.kisi = response;
        this.formDoldur();
      }, error => {
      });
  }

  formDoldur() {
    let kisi = this.kisi;
    this.kisiForm.controls['adi'].setValue(kisi.adi);
    this.kisiForm.controls['soyadi'].setValue(kisi.soyadi);
    this.kisiForm.controls['telefon'].setValue(kisi.telefon);
    this.kisiForm.controls['dogumTarihi'].setValue(kisi.dogumTarihiTxt);
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

  kisiyiDuzenle() {
    if (this.formValidation()) {
      let kisiModel = new Kisi();
      kisiModel.adi = this.f.adi.value;
      kisiModel.soyadi = this.f.soyadi.value;
      kisiModel.telefon = this.f.telefon.value;
      kisiModel.dogumTarihi = this.f.dogumTarihi.value;
      this.kisiService.Update(this.kisiId, kisiModel)
        .pipe(first())
        .subscribe(
          response => {
            if (response === null) {
              this.toastr.warning("Hata oluştu..");
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
