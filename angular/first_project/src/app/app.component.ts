import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_project';
  age :number=10;
  imgSrc:string="assets/images/img1.avif"
  styc :string="red"
  imgh ={"height":"500px","width":"500px"}
  c=0
  dic=[{name:"party1",vote:0},{name:"party2",vote:0},{name:"party3",vote:0},{name:"party4",vote:0}]
  incval(){
    this.c++
  }
  deval(){
    this.c--
  }
  s1=0
  vote1(){
    this.dic[0].vote++
  }
  s2=0
  vote2(){
    this.dic[1].vote++
  }
  s3=0
  vote3(){
    this.dic[2].vote++
  }
  s4=0
  vote4(){
    this.dic[3].vote++
  }
s:string=""
max=0
dis(){

for (const obj of this.dic) {
  if (obj.vote>this.max){
    this.max=obj.vote
    this.s=obj.name
  }
  
}
alert('{{}} won the game')  
}

}

  
 

