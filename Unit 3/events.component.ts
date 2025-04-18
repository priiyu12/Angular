import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickCount: number = 0;
  onTap(){
    this.clickCount++;
  }

  message: string = "";
  showMessage(){
    this.message = "Welcome to Angular";
  }

  createMessage(name){
    this.message = name;
  }
  hoverCountValue: number = 0;
  hoverCount(){
    this.hoverCountValue++;
  }

  selectedColor: string = "red";
  selectColour(color: string){
    this.selectedColor = color;
  }
  keyDownValue: string = "";
  keyDownEvent(text){
    this.keyDownValue = text;
  }

  num: number = 0;
  square: number = 0;
  showSquare(){
    this.num = 10;
    this.square = this.num * this.num;
  }

  imageUrl: string = "";
  getImage(){
    if(this.imageUrl==""){
      this.imageUrl = "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA=";
    }
    else {
      this.imageUrl = "";
    }
  }

  changeBG(){
    if(document.body.style.backgroundColor == "green"){
      document.body.style.backgroundColor = "pink";
    }
    else{
      document.body.style.backgroundColor = "green";
    }
  }
  changeColor(event) {
    (event.target as HTMLElement).style.backgroundColor = 'yellow';
  }

  resetColor(event: Event) {
    (event.target as HTMLElement).style.backgroundColor = 'transparent';
  }

  labelBgColor: string = "transparent";
  onLabelMouseMove(){
    this.labelBgColor="red";
  }

  onClick(){
    alert("Hey! You Clicked Me!");
  }

  onEnter(event){
    (event.target as HTMLElement).style.background="red";
  }
  onExit(event){
    (event.target as HTMLElement).style.background="transparent";
  }
  onDClick(){
    alert("Ouch! You pinched me twice!");
  }

  message1: string;
  onDown(text){
    this.message1 = text;
  }

  onUp(event){
    (event.target as HTMLElement).style.background = "hotpink";
  }

  onKey(event){
    (event.target as HTMLElement).style.background = "blue";
  }

  onInput(event){
    (event.target as HTMLElement).style.background = "yellow";
  }
  onChange(event){
    (event.target as HTMLElement).style.background = "green";
  }
  onFocus(event){
    (event.target as HTMLElement).style.background = "purple";
  }
  onBlur(event){
    setTimeout(() => {
      (event.target as HTMLInputElement).style.background = "orange";
    }, 1000); 
  }
}
