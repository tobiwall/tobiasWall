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
      image: 'portfolio-join',
      githubUrl: 'https://github.com/tobiwall/ownjoin',
      liveUrl: 'https://join.tobias-wall.de/index.html'
    },
    {
      name: 'El pollo loco',
      skills: 'HTML | CSS | Javascript',
      description: 'A simple jump and run game based on an object-oriented approach. Help pepe to find coins and salsa bottles to fight against the big endboss.',
      image: 'portfolio-pollo-loco',
      githubUrl: 'https://github.com/tobiwall/el_pollo_loco_wall',
      liveUrl: 'https://el-pollo-loco.tobias-wall.de/index.html'
    },
    {
      name: 'Simple CRM',
      skills: 'TypeScript | SCSS | Angular | Firebase',
      description: 'This Project will be ready soon',
      image: 'empty-screen',
      githubUrl: 'https://github.com/tobiwall',
      liveUrl: ''
    },
    {
      name: 'Pokédex',
      skills: 'HTML | CSS | Javascript | Api',
      description: 'Based in the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: 'portfolio-pokedex',
      githubUrl: 'https://github.com/tobiwall',
      liveUrl: 'https://pokedex.tobias-wall.de/index.html'
    }
  ]
}
