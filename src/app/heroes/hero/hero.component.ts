import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Peter Parker'
  public age: number = 30

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = 'Ironman'
  }

  changeAge(): void {
    this.age = 25
  }

  resetForm(): void {
    this.name = 'Peter Parker'
    this.age = 30
  }
}
