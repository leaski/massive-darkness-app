import { DefenseDice } from "../common/defense-dice.model";
import { OffenceDice } from '../common/offence-dice.model';
import { Health } from '../common/health.model';
import { Minions } from '../common/minions.model';

export class Monster {
  public name: string;
  public level: number;
  public type: string;
  public health: Health;
  public minions:Minions;
  public melee: OffenceDice | undefined;
  public ranged: OffenceDice | undefined;
  public magic: OffenceDice | undefined;
  public defense: DefenseDice;
  public text: string;

  constructor(
    name: string,
    level: number,
    type: 'Mob' | 'Agent' | 'Boss',
    health: Health,
    minions: Minions | undefined,
    // melee: OffenceDice,
    // ranged: OffenceDice,
    // magic: OffenceDice,
    // defense: DefenseDice,
    // text: string
  ) {
    this.name = name,
    this.level = level,
    this.type = type,
    this.health = health,
    this.minions = minions
    // this.melee = melee,
    // this.ranged = ranged,
    // this.magic = magic,
    // this.defense = defense,
    // this.text = text
  }
}
