import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../monsters.service';
import { Monster } from '../monster.model';

@Component({
  selector: 'app-monsters-list',
  templateUrl: './monsters-list.component.html',
  styleUrls: ['./monsters-list.component.css']
})
export class MonstersListComponent implements OnInit {
  monsters:Monster[];

  constructor(private monsterService:MonsterService) { }

  ngOnInit() {
    this.monsters = this.monsterService.getMonsterList1();
  }

  getMonsterHealthArr(monster) {
    return new Array(this.monsterService.getMonsterHealth(monster));
  }

}
