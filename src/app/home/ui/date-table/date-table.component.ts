import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-table',
  standalone: true,
  imports: [],
  templateUrl: './date-table.component.html',
  styleUrl: './date-table.component.css'
})
export class DateTableComponent {

  @Input() epochDateTime: string = '';
  @Input() gmtEpochDateTime: Date | string = '';
  @Input() relativeEpochDateTime = '';
  @Input() timeZoneEpochDateTime: Date | string = '';

}
