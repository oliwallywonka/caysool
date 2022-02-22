import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
import { InventarioService } from 'src/app/core/services/inventario.service';
import { Amortizacion } from 'src/app/interfaces/amortizacion';
import { Inventario } from 'src/app/interfaces/inventario';
import { PictureService } from 'src/app/core/services/picture.service';
import { Picture } from 'src/app/interfaces/picture';
import { environment } from 'src/environments/environment';
import { FormGroupExtension, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-card-inventario-information',
  templateUrl: './card-inventario-information.component.html',
  styles: [
  ]
})
export class CardInventarioInformationComponent implements OnInit, OnDestroy {
  loading = false;
  baseUrl = environment.publicUrl;
  comprimido = true;
  sub: Subscription;
  diasRestantes: number;
  inventarioId: string;
  inventario: Inventario;
  pictures: Picture[];
  amorizaciones: Amortizacion[] = [];
  modal = this.modalService.modal;

  pictureForm: FormGroup = this.fb.group({
    picture: [''],
  });
  constructor(
    private pictureService: PictureService,
    private inventarioService: InventarioService,
    private modalService: ModalService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private location: Location,
    private ng2ImgMax: Ng2ImgMaxService,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.inventarioId = this.route.snapshot.paramMap.get('inventarioId');
    this.getInventarioById();
    this.getPicturesByInventarioId();
    this.subscribePictures();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  getInventarioById() {
    this.sub.add(
      this.inventarioService.getInventarioById(+this.inventarioId).subscribe(
        inventario => {
          this.inventario = inventario;
        }
      )
    );
  }

  getPicturesByInventarioId() {
    this.sub.add(
      this.pictureService.getPictures(+this.inventarioId).subscribe(
        pictures =>{
          this.pictures = pictures;
        }
      )
    );
  }

  subscribePictures() {
    this.sub.add(
      this.pictureService.pictures.subscribe(
        pictures => {
          if (pictures) {
            this.pictures = pictures;
          }
        }
      )
    );
  }

  openDeleteModal(picture: Picture) {
    this.modal.modalName = 'pictureDeleteModal';
    this.modal.visible = true;
    this.pictureService.picture.emit(picture);
  }

  goToBackPage() {
    this.location.back();
  }

  savePicture() {
    this.loading = true;
    const formData = (<FormGroupExtension>this.pictureForm).toFormData();
    this.pictureService.postPicture(formData, +this.inventarioId).subscribe(
      response => {
        this.successMessage('creada');
        this.getPicturesByInventarioId();
        this.loading = false;
      },
      error => {
        this.errorMessage(error.error.message);
        this.loading = false;
      }
    );
  }




  successMessage(message = 'creado') {
    this.alertService.alert.fire({
      title: `Imagen ${message} Exitosamente`,
      icon: 'success',
    })
  }

  errorMessage(message) {
    this.alertService.alert.fire({
      title: message,
      icon: 'error',
    })
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.compressFile(file)
    }
  }

  compressFile(image) {
    this.comprimido = false;
    this.ng2ImgMax.resizeImage(image, 400, 300).subscribe( result => {
      const compressedFile = new File([result], result.name)
      this.comprimido = true;
      this.pictureForm.patchValue({
        picture: compressedFile,
      });
    })
  }

}
