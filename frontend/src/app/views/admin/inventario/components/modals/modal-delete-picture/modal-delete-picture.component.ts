import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { PictureService } from 'src/app/core/services/picture.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Picture } from 'src/app/interfaces/picture';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-delete-picture',
  templateUrl: './modal-delete-picture.component.html',
  styles: [
  ]
})
export class ModalDeletePictureComponent implements OnInit, OnDestroy {
  publicUrl = environment.publicUrl;
  sub: Subscription;
  loading: boolean = false;
  picture: Picture;
  modal = this.modalService.modal;

  constructor(
    private pictureService: PictureService,
    private alertService: AlertService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribePicture();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refreshPictures() {
    this.sub.add(
      this.pictureService.getPictures(this.picture.inventario.id).subscribe(
        pictures => {
          console.log(pictures);
          this.pictureService.pictures.emit(pictures);
        }
      )
    );
  }

  subscribePicture() {
    this.sub.add(
      this.pictureService.picture.subscribe(
        (picture) => {
          this.picture = picture;
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.pictureService.picture.emit(null);
  }

  toggleModal() {
    this.modal.visible = true;
    this.modal.modalName = 'pictureDeleteModal';
  }
  save() {
    this.loading = true;
    this.pictureService.deletePicture(this.picture.id).subscribe(
      response => {
        this.loading = false;
        this.alertService.triggerMessage('Imagen Eliminada exitosamente', 'success');
        this.refreshPictures();
        this.closeModal();
      },
      error =>{
        this.loading = false;
        this.alertService.triggerMessage(error.error.message, 'error');
        this.closeModal();
      }
    )

  }

}
