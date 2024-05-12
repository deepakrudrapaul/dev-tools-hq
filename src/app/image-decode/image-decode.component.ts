import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-decode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-decode.component.html',
  styleUrl: './image-decode.component.css'
})
export class ImageDecodeComponent {

  inputString: string = '';
  outputImage: string = '';





  convertBase64ToImage() {
    this.outputImage = this.inputString;
  }


  isBase64Image() {
    
  }


}
