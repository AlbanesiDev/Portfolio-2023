import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillData: any[] = []

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data) => {
      this.skillData = data.skill;
    });
  }

  getGradient(color: string): string {
    return `linear-gradient(135deg, ${color}, #ffffff)`;
  }
}
