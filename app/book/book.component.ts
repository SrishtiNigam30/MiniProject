import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: ['./book.component.css']
})
export class BookComponent implements OnInit {
  details:Contact[];
  detail:Contact;
  fname:string;
  nname:string;
  phn:number;
  showToggle:boolean;
  constructor(private detSer:Contact) { 
    this.detail=new Contact();
    this.details=[];
    var details1,details2,details3,details4;
    details1=new Contact();
    details1.firstname="Eric";
    details1.lastname="Elliot";
    details1.phonenumber=2225556675;
    this.details.push(details1);
    details2=new Contact();
    details2.firstname="Steve";
    details2.lastname="Jobs";
    details2.phonenumber=2204546754;
    this.details.push(details2);
    details3=new Contact();
    details3.firstname="Fred";
    details3.lastname="Allen";
    details3.phonenumber=2106579586;
    this.details.push(details3);
    details4=new Contact();
    details4.firstname="Steve";
    details4.lastname="Wozniak";
    details4.phonenumber=3436758786;
    this.details.push(details4);
    this.showToggle=true;
  }

  ngOnInit(): void {
  }
  newadd()
  {
    document.getElementById('form1').style.display = '';
  }
  
  displayDetails()
  {
    this.addMovie(this.detail);
    this.detail=new Contact();
    this.showToggle=false;
  }
  addMovie(m:Contact)
    {
        this.details.push(m);
    }
  delcon(det)
  {
    this.detail.firstname="";
    this.detail.lastname="";
    this.detail.phonenumber=0;
  }
  searchcon()
  {
    for(let i=0;i<this.details.length;i++)
    {
      if(this.details[i].firstname.toLocaleLowerCase())
      {
        this.details.push(this.details[i]);
      }
    }
  }
  sortContact()
  {
    this.details.sort(function(a,b){
      if(a.phonenumber<b.phonenumber){
        return -1;
      }
      if(a.phonenumber>b.phonenumber){
        return 1;
      }
      return 0;
    })
  }
  sortfirstname()
  {
    this.details.sort((a,b)=>a.firstname.localeCompare(b.firstname));
  }
  sortlastname()
  {
    this.details.sort((a,b)=>a.lastname.localeCompare(b.lastname));
  }
  
}
export class Contact{
  public firstname:string;
  public lastname:string;
  public phonenumber:number;
  details:Contact[];
  constructor(){

  }
  
}