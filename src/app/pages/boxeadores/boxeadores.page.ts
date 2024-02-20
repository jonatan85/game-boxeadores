import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxeadores } from 'src/app/servicios/boxeadores/boxeadores.models';
import { BoxeadoresService } from 'src/app/servicios/boxeadores/boxeadores.service';

@Component({
  selector: 'app-boxeadores',
  templateUrl: './boxeadores.page.html',
  styleUrls: ['./boxeadores.page.scss'],
})
export class BoxeadoresPage implements OnInit {
  public boxeadores?: Observable<Boxeadores[]>
  public boxeador: Boxeadores[] = [];
 

  constructor(
    private boxeadoresService: BoxeadoresService
  ) { }

  ngOnInit() {
    this.boxeadores = this.boxeadoresService.getBoxeadores();    
  }

  public seleccionaJugador(_id:string) {
    console.log(_id);
    
  }




}
