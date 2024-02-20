import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Boxeadores } from '../boxeadores/boxeadores.models';

@Injectable({
  providedIn: 'root'
})
export class BoxeadoresRingService {

  constructor() { }

  public selectBoxeadoresRandom (boxeadores: Boxeadores[]): Observable<Boxeadores | null>{
    if (boxeadores && boxeadores.length > 0 ) {
      const randomIndex = Math.floor(Math.random() * boxeadores.length );
      const randomBoxeador = boxeadores[randomIndex];
      return of(randomBoxeador);
    } else {
      return of(null);
    }
  }
}
