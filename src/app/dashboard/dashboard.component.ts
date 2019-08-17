import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { RouterLink, Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Films } from '../model/films';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private router: Router) {

  }


  codigo: number;

  loadCharacters: Array<any> = new Array();

  loadChars = [];

  films = new Films();

  ngOnInit() {

  }


  pesquisar() {
    this.loadCharacters = new Array<any>();
    this.dashboardService.pesquisar(this.codigo)
    .then(resultado => {
      this.films = new Films();
      this.films.director = resultado.director;

      this.films.opening_crawl = resultado.opening_crawl;

      this.films.producer = resultado.producer;

      this.films.elease_date = resultado.elease_date;

      this.loadChars = resultado.characters;

    })


    
  }
}

