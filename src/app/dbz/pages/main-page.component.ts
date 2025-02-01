import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.characters
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character)
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id)
  }
}
