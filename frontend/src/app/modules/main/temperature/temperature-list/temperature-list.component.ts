import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-temperature-list',
  templateUrl: './temperature-list.component.html',
  styleUrls: ['./temperature-list.component.sass']
})
export class TemperatureListComponent implements OnInit {
  public calendarData = {
    '29/2/2020': {
      title: 'Event 1', subtitle: 'Subtitel Event1', description: 'Description Event 1', image: 'https://i.imgur.com/fkkT89j.png' },
    '2/3/2020': {
      title: 'Event 2', subtitle: 'Subtitel Event2', description: 'Description Event 2', image: 'https://i.imgur.com/kShC7IZ.png' },
    '3/3/2020': {
      title: 'Event 3', subtitle: 'Subtitel Event3', description: 'Description Event 3', image: 'https://i.imgur.com/D8rC1Pt.png' },
    '4/3/2020': {
      title: 'Event 4', subtitle: 'Subtitel Event4', description: 'Description Event 4', image: 'https://i.imgur.com/kShC7IZ.png' },
    '5/3/2020': {
      title: 'Event 5', subtitle: 'Subtitel Event5', description: 'Description Event 5', image: 'https://i.imgur.com/D8rC1Pt.png' },
  };

  public selectedDate = new Date().toLocaleDateString();

  public selectCalendar = this.calendarData[this.selectedDate];

  constructor(

  ) { }

  ngOnInit(): void {

  }

  public dateClass = (d: Date): MatCalendarCellCssClasses => {
    let classData = '';
    for (const cData in this.calendarData) {
      if (d.toLocaleDateString() === cData) {
        classData = 'date-with-event';
        break;
      }
    }
    return classData;
  }

  public onSelectChange(localeDate: string): void {
    this.selectedDate = localeDate;
    this.selectCalendar = this.calendarData[localeDate];
  }

  public setLocale(date: Date): string {
    return date.toLocaleDateString();
  }
}
