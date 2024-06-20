import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio = [
    {
      name: 'Join',
      skills: 'HTML | CSS | Javascript | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign useres and categories.',
      image: 'join'
    },
    {
      name: 'El pollo loco',
      skills: 'HTML | CSS | Javascript',
      description: 'A simple jump and run game based on an object-oriented approach. Help pepe to find coins and salsa bottles to fight against the big endboss.',
      image: 'pollo-loco'
    },
    {
      name: 'Simple CRM',
      skills: 'TypeScript | SCSS | Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working width CRUD funktionality.',
      image: 'crm'
    },
    {
      name: 'Pokédex',
      skills: 'HTML | CSS | Javascript | Api',
      description: 'Based in the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: 'pokedex'
    }
  ]

}
