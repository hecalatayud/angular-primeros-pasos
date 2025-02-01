import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characters: Character[] = []

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter()

  public emitOnDeleteCharacter(id: string): void {
    this.onDeleteCharacterById.emit(id)
  }
}
