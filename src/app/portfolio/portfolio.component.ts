import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../share/header/header.component';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChildren('projects') projectElements!: QueryList<ElementRef>;

  currentLanguage: string | undefined;

  constructor(private sharedService: SharedService, private translate: TranslateService) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.projectElements.forEach((project: ElementRef) => {
      observer.observe(project.nativeElement);
    });
  }

  getDescription(project: any) {
    if (this.currentLanguage == "de") {
      return project.descriptionDE;
    } else {
      return project.descriptionEN;
    }
  }

  portfolio = [
    {
      name: 'Join',
      skills: 'HTML | CSS | Javascript | Firebase',
      descriptionDE: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      descriptionEN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign useres and categories.',
      image: 'portfolio-join',
      githubUrl: 'https://github.com/tobiwall/ownjoin',
      liveUrl: 'https://join.tobias-wall.de/index.html'
    },
    {
      name: 'El pollo loco',
      skills: 'HTML | CSS | Javascript',
      descriptionDE: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Salsaflaschen zu finden, um gegen den großen Endboss zu kämpfen.',
      descriptionEN: 'A simple jump and run game based on an object-oriented approach. Help pepe to find coins and salsa bottles to fight against the big endboss.',
      image: 'portfolio-pollo-loco',
      githubUrl: 'https://github.com/tobiwall/el_pollo_loco_wall',
      liveUrl: 'https://el-pollo-loco.tobias-wall.de/index.html'
    },
    {
      name: 'Simple CRM',
      skills: 'TypeScript | SCSS | Angular | Firebase',
      descriptionDE: 'Dieses Projekt wird bald fertig sein!!! Ein sehr einfaches Customer-Relationship-Management-System mit CRUD-Funktionalität.',
      descriptionEN: 'This Project will be ready soon!!! A very Simple Customer Relationship Management system working width CRUD funktionality.',
      image: 'empty-screen',
      githubUrl: 'https://github.com/tobiwall',
      liveUrl: ''
    },
    {
      name: 'Pokédex',
      skills: 'HTML | CSS | Javascript | Api',
      descriptionDE: 'Basierend auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      descriptionEN: 'Based in the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: 'portfolio-pokedex',
      githubUrl: 'https://github.com/tobiwall',
      liveUrl: 'https://pokedex.tobias-wall.de/index.html'
    }
  ]

  ngOnInit() {
    this.sharedService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

}