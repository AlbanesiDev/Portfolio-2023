import { Component } from '@angular/core';
import { DataModel, Skill } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public skillData: Skill[] = []

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data: DataModel) => {
      this.skillData = data.skill;
    });
  }

  getGradient(color: string): string {
    return `linear-gradient(135deg, ${color}, #ffffff)`;
  }
}
