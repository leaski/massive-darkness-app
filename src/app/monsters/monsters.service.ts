import { Monster } from './monster.model';
import { DefenseDice } from '../common/defense-dice.model';
import { OffenceDice } from '../common/offence-dice.model';
import { Health } from '../common/health.model';
export class MonsterService {
  numberOfPlayers = 3;

  monsters = {
    level1: [
      new Monster(
        'Dwarf Warriors',
        1,
        'Mob',
        new Health (false, 2),
        {
          multiplier: false,
          number: 2,
        }
      ),
      new Monster(
        'Dwarf Warriors',
        1,
        'Mob',
        new Health (false, 2),
        {
          multiplier: false,
          number: 2,
        }
      ),
      new Monster(
        'Dwarf Defenders',
        1,
        'Mob',
        new Health (true, 1),
        {
          multiplier: true,
          number: 1,
        }
      ),
      new Monster(
        'Goblin Agent',
        1,
        'Agent',
        new Health (true, 2),
        null
      ),
    ]
  }

  getMonsterList1(){
    return this.monsters.level1;
  }

  getMonsterHealth(monster:Monster){
    const multiplier = monster.health.multiplier ? this.numberOfPlayers : 1;
    return multiplier * monster.health.number;
  }

  getMinionsCount(monster:Monster){
    const multiplier = monster.minions.multiplier ? this.numberOfPlayers : 1;
    return multiplier * monster.minions.number;
  }
}
