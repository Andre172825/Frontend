import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  GameList : any;
  Games : any;
  name : any;
  gender : any;
  description: any;

  showError: boolean;
  mensajeError: string;
  constructor(private _Game : ServicesService) {
    this.GetGames();
   }

  ngOnInit(): void {
  }
  GetGames(){
    this._Game.GetGameList(0).subscribe(respuesta => {
      this.GameList = respuesta;
      this.Games = this.GameList.gameList;
    }, 
    error => {
      this.showError = true;
      this.mensajeError = "Error al consultar el Juego. Intentelo nuevamente";
    })
  }
  GetGame(Id : number){
    this._Game.GetGameList(Id).subscribe(respuesta => {
      this.GameList = respuesta;
      this.name = this.GameList.gameList[0].name;
      this.gender = this.GameList.gameList[0].gender;
      this.description = this.GameList.gameList[0].description;      
    }, 
    error => {
      this.showError = true;
      this.mensajeError = "Error al consultar el Juego. Intentelo nuevamente";
    })
  }
}
