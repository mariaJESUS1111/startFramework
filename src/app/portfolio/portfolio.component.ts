import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedItem: any = null;

  portfolioItems = [
    { title: 'Web Design', img: 'https://routeegy.github.io/startFramework/assets/images/port2.png' },
    { title: 'Mobile App', img: 'https://routeegy.github.io/startFramework/assets/images/poert1.png' },
    { title: 'Branding', img: 'https://routeegy.github.io/startFramework/assets/images/port2.png' },
    { title: 'E-Commerce', img: 'https://routeegy.github.io/startFramework/assets/images/port3.png' },
     { title: 'Branding', img: 'https://routeegy.github.io/startFramework/assets/images/port2.png' },
    { title: 'E-Commerce', img: 'https://routeegy.github.io/startFramework/assets/images/port3.png' }

  ];

  openModal(item: any) {
    this.selectedItem = item;
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    modal.show();
  }
}
