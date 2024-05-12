import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast'
import { EditorComponent } from '../shared/ui/editor/editor.component';

@Component({
  selector: 'app-json',
  standalone: true,
  imports: [FormsModule, EditorComponent],
  templateUrl: './json.component.html',
  styleUrl: './json.component.css'
})
export class JsonComponent {

  private toast = inject(HotToastService);

  inputJson: string ='';
  inputJsonError: string = '';
  outputJson: string = '';


  getAllObjects() {
    try {
      const parsedJSON = JSON.parse(this.inputJson);
      this.outputJson = JSON.stringify(parsedJSON, null, 2);
      
    } catch (error:any) { 
      console.log(error?.name)
      console.log(error?.message)
      this.toast.warning('Invalid JSON');
    }
  }

  formatJson(){
    try {
      const parsedJSON = JSON.parse(this.inputJson);
      this.outputJson = JSON.stringify(parsedJSON, null, 2);
      
    } catch (error:any) { 
      this.outputJson = error.message;
    }
  }

}
