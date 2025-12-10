import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService, Celular } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
   standalone: true,  
   imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  celulares: Celular[] = [];
  loading = true;
  error?: string;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getCelulares().subscribe({
      next: (items) => {
        this.celulares = items;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudo cargar los datos.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
