import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Camera]
})
export class Tab1Page implements OnInit {
    image: string;
    images: string[] = []

  constructor(private camera: Camera, private alertController: AlertController) {}

  ngOnInit() {}

  takePicture() {
    let options: CameraOptions = {
      // On va stocker les photos sous forme de chaîne de caractères et pas de fichier
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 640,
      targetHeight: 480,
      // Sauvegarde la photo dans la bibliothèque
      saveToPhotoAlbum: true,
      cameraDirection: this.camera.Direction.FRONT
    }
    this.camera.getPicture(options).then(data => {
      //On crée une modale et une fois qu'elle est prête, on l'affiche
     // alert(data);
      this.image ='data:image/jpeg;base64,'+data;
      this.images.push(this.image);
      // this.alertController.create({message: data}).then(alert => alert.present());
    });
  }

}
