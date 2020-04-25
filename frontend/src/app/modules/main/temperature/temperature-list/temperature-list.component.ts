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
      title: 'Event 1', subtitle: 'Subtitle Event1',
      status: 'warning',
      description: 'Description Event 1',
      image: 'https://i.imgur.com/fkkT89j.png' },
    '2/3/2020': {
      title: 'Event 2', subtitle: 'Subtitle Event2',
      status: 'danger',
      description: 'Description Event 2',
      image: 'https://i.imgur.com/kShC7IZ.png' },
    '3/3/2020': {
      title: 'Event 3', subtitle: 'Subtitle Event3',
      status: 'success',
      description: 'Description Event 3',
      image: 'https://i.imgur.com/D8rC1Pt.png' },
    '4/3/2020': {
      title: 'Event 4', subtitle: 'Subtitle Event4',
      status: 'danger',
      description: 'Description Event 4',
      image: 'https://i.imgur.com/kShC7IZ.png' },
    '5/3/2020': {
      title: 'Event 5', subtitle: 'Subtitle Event5',
      status: 'success',
      description: 'Description Event 5',
      image: 'https://i.imgur.com/D8rC1Pt.png' },
  };

  public selectedDate = new Date().toLocaleDateString();

  public selectCalendar = this.calendarData[this.selectedDate];

  constructor(

  ) { }

  ngOnInit(): void {

  }

  public dateClass = (d: Date): MatCalendarCellCssClasses => {
    const currentDateCalendar = this.calendarData[ d.toLocaleDateString() ];

    if (!currentDateCalendar) {
      return '';
    }
    return `date-${currentDateCalendar.status}`;
  }

  public onSelectChange(localeDate: string): void {
    this.selectedDate = localeDate;
    this.selectCalendar = this.calendarData[localeDate];
  }

  public setLocale(date: Date): string {
    return date.toLocaleDateString();
  }
}
