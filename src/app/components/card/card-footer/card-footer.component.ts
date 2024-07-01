import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {
  @Input()
  isBuy:string = 'N'
  gameStatus:string = ''
  @Input()
  gameType:string = ''
  @Input()
  gameConsole:string = ''
  @Input()
  gamePrice:string = '0'

  constructor() { }

  ngOnInit(): void {
    this.BuyOrNot()
  }

  BuyOrNot() {
    if(this.isBuy == 'N' || this.isBuy == 'n') {
      this.gameStatus = 'Buy Now!'
    }else if(this.isBuy == 'S' || this.isBuy == 's') {
      this.gameStatus = 'Play It Now!'
    }else {
      this.gameStatus = 'VALOR INVÁLIDO!'
    }
  }
}
