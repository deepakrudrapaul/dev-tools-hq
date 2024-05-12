import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { differenceInDays, differenceInHours, differenceInMonths, differenceInYears, format, isValid } from 'date-fns';
import { DateTableComponent } from './ui/date-table/date-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, DateTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  inputEpochTime = '';
  
  epochDateTime = '';
  gmtEpochDateTime: Date | string = '';
  timeZoneEpochDateTime: Date | string = '';
  relativeEpochDateTime = '';

  gmtHumanDateTime: Date | string = '';
  timeZoneHumanDateTime: Date | string = '';
  relativeHumanDateTime = '';

  dateForm = {
    year : 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  };

  ngOnInit(): void {
    this.initHumanDateTime();
  }


  initHumanDateTime() {

    this.dateForm.year = new Date().getFullYear();
    this.dateForm.month = new Date().getMonth() + 1;
    this.dateForm.day = new Date().getDate();
    this.dateForm.hour = new Date().getHours();
    this.dateForm.minute = new Date().getMinutes();
    this.dateForm.second = new Date().getSeconds();
  }

  convertEpochToHumanDate() {
    const dateTime = new Date(parseInt(this.inputEpochTime) * 1000);
    if(isValid(dateTime)) {
      this.gmtHumanDateTime = dateTime.toUTCString();
      this.timeZoneHumanDateTime = format(dateTime ,'eee, dd MMM yyyy HH:mm:ss zzzz');
      this.relativeHumanDateTime = this.getRelativeDateTime(dateTime);
    }else{
      this.gmtHumanDateTime = 'Invalid Date';
      this.timeZoneHumanDateTime = 'Invalid Date';
      this.relativeHumanDateTime = 'Invalid Date';
    }
    
  }


  convertHumanToEpochDate() {
    const dateTime = new Date(this.dateForm.year, this.dateForm.month - 1, this.dateForm.day, this.dateForm.hour, this.dateForm.minute, this.dateForm.second);
    if(isValid(dateTime)) {
    this.epochDateTime = (dateTime.getTime() / 1000).toString();
    this.gmtEpochDateTime = dateTime.toUTCString();
    this.timeZoneEpochDateTime = format(dateTime ,'eee, dd MMM yyyy HH:mm:ss zzzz');
    this.relativeEpochDateTime = this.getRelativeDateTime(dateTime);
    }else{
      this.epochDateTime = 'Invalid Date';
      this.gmtEpochDateTime = 'Invalid Date';
      this.timeZoneEpochDateTime = 'Invalid Date';
      this.relativeEpochDateTime = 'Invalid Date';
    }
  }




  getRelativeDateTime(dateTime: Date) {
    const daysDiff =  Math.abs(differenceInDays(dateTime, new Date()));
    if(daysDiff > 365) {
      return Math.abs(differenceInYears(dateTime, new Date())) + ' years ago';
    } else if(daysDiff > 30) {
      return Math.abs(differenceInMonths(dateTime, new Date())) + ' months ago';
    } else if(daysDiff > 1) {
      return Math.abs(differenceInDays(dateTime, new Date())) + ' days ago';
    } else {
      return Math.abs(differenceInHours(dateTime, new Date())) + ' hours ago';
    }
  }

  

}
