import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1500
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 8000
    }
  ]

  onNewCharacter(character: Character): void {
    this.characters.push(character)
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1)
  }
}
