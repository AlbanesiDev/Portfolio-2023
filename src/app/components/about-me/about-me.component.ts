import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  aboutMe: any[] = [];

  constructor (
    private dataService: DataService,
  ){}

  ngOnInit(){
    this.dataService.getData().subscribe((data) => {
      this.aboutMe = data.about_me;
      console.log(data.about_me);
    })
  }
}
