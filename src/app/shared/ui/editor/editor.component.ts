import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  @Input() content!: string;
  @Input() placeholder!: string;
  @Input() disabled: boolean = false;

  @ViewChild('lineNumber') lineNumber!: ElementRef<HTMLInputElement>;



  onChange(event: any) {
    const numberOfLines = event.target.value.split('\n').length;
    this.lineNumber.nativeElement.innerHTML = Array(numberOfLines).fill('<span></span>').join('');
  }
}
