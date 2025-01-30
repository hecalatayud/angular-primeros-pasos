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
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter()

  public emitOnDeleteCharacter(index: number): void {
    this.onDeleteCharacter.emit(index)
  }
}
