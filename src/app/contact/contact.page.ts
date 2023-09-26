import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  addContactUsPage : FormGroup | undefined
  
  constructor( private fb : FormBuilder) { 
  
  }

  ngOnInit() {
    this.addContactUsPage =this.fb.group({
      name:['',Validators.required],
      email:['',Validators.pattern],
      phone:['',Validators.required],
      address:['',Validators.required],
      discription:['',Validators.required]

    })
  }

}
