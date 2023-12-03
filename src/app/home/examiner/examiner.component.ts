import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
// import { InferenceService } from 'src/app/services/inference.service';

@Component({
  selector: 'app-examiner',
  templateUrl: './examiner.component.html',
  styleUrls: ['./examiner.component.scss'],
})
export class ExaminerComponent{
  public capturedImage?: string;

  // constructor(private camera: Camera) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.dataUrl;
  
    // Can be set to the src of an image now
    this.capturedImage = imageUrl;
  };

  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //   };

  //   this.camera.getPicture(options).then(
  //     (imageData) => {
  //       // imageData is a base64 encoded string
  //       this.capturedImage = 'data:image/jpeg;base64,' + imageData;
  //     },
  //     (err) => {
  //       console.log('Error taking picture:', err);
  //     }
  //   );

}
// webcam snapshot trigger
  // private trigger: Subject<void> = new Subject<void>();

  // constructor(
  //   private readonly infer: InferenceService
  // ) { }

  // // latest snapshot
  // public webcamImage?: WebcamImage;
  // uint8Array = this.convertWebcamImageToUint8Array(this.webcamImage!)

  // capture(){
  //   this.trigger.next()
  //   console.log("capture")
  // }

  // handleImage(webcamImage: WebcamImage): void {
  //   console.log(webcamImage);
  //   this.webcamImage = webcamImage;
  //   console.log(this.uint8Array);
  // }

  // public get triggerObservable(): Observable<void> {
  //   return this.trigger.asObservable();
  // }

  // examine(){
  //   this.infer.detectFaceMorphAttack(this.uint8Array)
  // }

  // convertWebcamImageToUint8Array(webcamImage: WebcamImage): Uint8Array {
  //   // Get the image data from the WebcamImage
  //   const imageData = webcamImage.imageData;
  
  //   // Extract pixel data from the ImageData
  //   const pixels = imageData.data;
  
  //   // Create a Uint8Array and copy pixel data into it
  //   const uint8Array = new Uint8Array(pixels.buffer);
  
  //   return uint8Array;
  // }