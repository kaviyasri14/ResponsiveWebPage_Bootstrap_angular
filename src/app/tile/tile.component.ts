import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
@Input() tileinfo:ITile;
  constructor() { }
  ngOnInit() {
  }

}
export interface ITile {
  name: string;
  description: string;
  imgURL: string;
} 
