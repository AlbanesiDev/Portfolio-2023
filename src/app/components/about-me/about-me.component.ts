import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public currentTime!: string;
  public aboutMe: any[] = [];

  constructor (
    private dataService: DataService,
  ){
    const argentinaTime = moment().tz('America/Argentina/Buenos_Aires');
    this.currentTime = argentinaTime.format('HH:mm');
  }

  ngOnInit(){
    this.dataService.getData().subscribe((data) => {
      this.aboutMe = data.about_me;
    })
  }
}
