// tensorflow.service.ts
import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs-node';

@Injectable({
  providedIn: 'root',
})
export class InferenceService {
  private model!: tf.LayersModel;

  async loadModel() {
    this.model = await tf.loadLayersModel('../../assets/Face-morph_Detection_AI_2.json');
  }

  async detectFaceMorphAttack(imageData: Uint8Array): Promise<boolean> {
    const imageTensor = tf.node.decodeImage(imageData, 3) as tf.Tensor3D;
    const processedImage = this.preprocessImage(imageTensor);
    const expandedImage = processedImage.expandDims();
    const predictions = this.model.predict(expandedImage) as tf.Tensor;
    const predictionsArray = Array.from(predictions.dataSync());
    const threshold = 0.5;
    const isFaceMorphAttack = predictionsArray[0] > threshold;

    imageTensor.dispose();
    processedImage.dispose();
    expandedImage.dispose();
    predictions.dispose();

    return isFaceMorphAttack;
  }

  private preprocessImage(image: tf.Tensor3D): tf.Tensor3D {
    const processedImage = tf.image.resizeBilinear(image, [224, 224]).div(tf.scalar(255));
    return processedImage as tf.Tensor3D;
  }
}
