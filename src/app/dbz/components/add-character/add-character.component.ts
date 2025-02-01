import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'dbz-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  emitCharacter(): void {
    if (this.character.name.length == 0)
      return

    this.onNewCharacter.emit(this.character)
    this.character = { id: uuid(), name: '', power: 0 }
  }
}
