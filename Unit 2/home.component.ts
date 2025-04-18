import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'Welcome to the Home Page';

  fruits = ['Apple','Banana', 'Chickoo', 'Dates'];

  users = [
    { firstName: 'Gresi', lastName: 'Murphy', email: 'gresi.murphy@test.com', role: 'User' },
    { firstName: 'Vatsal', lastName: 'Reynolds', email: 'vatsal.reynolds@test.com', role: 'Admin' },
    { firstName: 'Rohit', lastName: 'Jabowski', email: 'rohit.jabowski@test.com', role: 'Admin' },
    { firstName: 'Jina', lastName: 'Glaser', email: 'jina.glaser@test.com', role: 'User' },
    { firstName: 'Panth', lastName: 'Bilzerian', email: 'panth.bilzerian@test.com', role: 'User' }
  ]

  peopleByCountry: any[] = [
    {'country': 'UK',
      'people': [
        {"name": "Prii"},
        {"name": "Vidi"},
        {"name": "Kavya"}
      ] 
    },
    { 'country': 'US',
      'people': [
        { "name": "Harsh"},
        { "name": "Sid"},
        { "name": "Jiya"}
      ]
    }
  ];

  employees: any[] =[ 
    { id: 1, name: 'Jay', salary: 5000 },
    { id: 2, name: 'Sahil', salary: 1000 },
    { id: 3, name: 'Nishi', salary: 3000 },
    { id: 4, name: 'Prisha', salary: 8000 } 
  ];

  people: any[] = [
    { name: 'Kartik Sharma', age: 29, country: 'IN' },
    { name : 'Ravi Singh',age: 33,country: 'UK' },
    { name: 'Jinal Shah',age: 28,country: 'UK' },
    { name: 'Het Parekh',age: 34,country: 'USA' },
    { name: 'Janvi Pandya',age: 32,country: 'USA' },
    { name: 'Shanvi Mehta',age: 28,country: 'HK' }
    ];
  
  isError = false;


  ngOnInit(): void {
  }

}
