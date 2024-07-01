import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gamePhoto:string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAANlBMVEXMzMzPz8+Xl5eSkpKPj4/Ly8vDw8PHx8eUlJSdnZ20tLTAwMCrq6uampqwsLCfn5+lpaW6uroMN10IAAACqUlEQVR4nO3Xy2LcKgyAYQuMAQMG3v9lj2SP06Y9k65Sd/F/i8Tjy4wAgfCyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBfJup/jr5+5pfb5E8PfKtw5NSnHcXq3B7sqIyUyxfPlHWzf7P7Ua7vaKmGbw/1nerdcGmeR7n53SJyqae0vX0kdG8XS0rDN4t8962v9S8F/Jvoq+ZAzrLMNEVq0pCq2yS28S415HDWBOltkeIOWaLT79j9V+P2nablhP6+Ru/04+anxFztVHsNQwg//p5iOqwJW9plkdGD7GvU0+l4aDqUI1i/Jlm6dXvoVTY39ai4ed1xrIeG3Vq8HxkjWrun026XmaLUrGdl5KdmtCwhTs2EpVkvhjE0OSwl4t2EkF3UYZr3/dNv1gSZZ6M2v8kYdv5ojy1Kcqw+azSWFzoPupRksQW3v64XX0Pqd3xBs/9swp4tt+JapNtMlj09Ev5pz83yeLV+ltqX4i02ccfrehhtuI+5WntcziYc3W4L2oR83jnTc8uqyNZ0LrwbBZsW6WPFLKmIhDXKvzMKMZ4/vwZ5NxdUTvMuw3vKKrUerrlQHp8LUof15Vx1RbEVSRdUHZNPK5JmWkr9lSQ2cZTzKZwt1SY9vSJZCNeiqlVtuepCsMTQTr3Lc3Rj9x+Lvm2HdC5oQfuoC/OsC/6xuqAbA9EgRbN8Fxk2J4+rOt8xH2tZ2qdEP+uCVudg1Xl5Vef0VHVehnfdnz1e13bvkXxP7h6ELQ0rBj9vgc4mLJtupdZ87ZFcfm6PZDtV99pv1tbmmfPbcP3HKmo5H4b7adt3NWEp3dXr7J7d8dyS+sf3hevw8/vAv/W+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADznPzqFFCazDHJJAAAAAElFTkSuQmCC'
  @Input()
  labelStatus:string = ''
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
  }

}
