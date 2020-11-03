import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Kisi } from 'src/app/core/models/kisi.model';
import { KisilerService } from 'src/app/core/services/kisiler.service';
import { KisilerCreateComponent } from '../kisiler-create/kisiler-create.component';
import { KisilerEditComponent } from '../kisiler-edit/kisiler-edit.component';

@Component({
  selector: 'app-kisiler-list',
  templateUrl: './kisiler-list.component.html',
  styleUrls: ['./kisiler-list.component.css']
})
export class KisilerListComponent implements OnInit {

  kisiler: Kisi[];

  constructor(
    private kisiservice: KisilerService,
    private dialog: MatDialog,
    private toastr: ToastrService,


  ) { }

  ngOnInit(): void {
    this.getKisilerList();
  }

  getKisilerList() {
    this.kisiservice.GetAll()
      .pipe(first())
      .subscribe(response => {
        console.log(response);
        this.kisiler = response;
      }, error => {
      });
  }

  YeniKisiEkle() {
    const dialogRef = this.dialog.open(KisilerCreateComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.toastr.warning("Liste yenileniyor..");

      this.getKisilerList();
    });
  }

  kisiDuzenle(id: string) {
    const dialogRef = this.dialog.open(KisilerEditComponent, {
      // width: '250px',
      data: { id: id },

    });

    dialogRef.afterClosed().subscribe(result => {
      this.toastr.warning("Liste yenileniyor..");
      this.getKisilerList();

    });
  }



  kisiSil(id: string) {
    this.kisiservice.Delete(id)
      .pipe(first())
      .subscribe(response => {
        this.getKisilerList();
      }, error => {
      });
  }

  TabloyuYenile() {
    this.getKisilerList();
  }

}
