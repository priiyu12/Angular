import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  title = "Assignment Page!"

  letters = ['P', 'Q', 'R', 'S', 'T', 'U']

  studentsName = [
    { name: 'Alex' },
    { name: 'Eric' },
    { name: 'Ivan' }
  ]

  students = [
    { name: 'Alex', rollno: 101, marks: 80 },
    { name: 'Eric', rollno: 102, marks: 90 },
    { name: 'Ivan', rollno: 103, marks: 100 }
  ]

  studentdetails = [
    { 
      country: 'US',
      students: [
        { name: 'Alex', age: 17 },
        { name: 'Eric', age: 18 },
        { name: 'Ivan', age: 16 }
      ]
    },
    { 
      country: 'UK',
      students: [
        { name: 'Alex', age: 21 },
        { name: 'Joy', age: 18 },
      ]
    }
  ]

  employees = [
    { id : 101 , name: 'Alex', salary: 8000 },
    { id : 102 , name: 'Eric', salary: 7000 },
    { id : 103 , name: 'Ivan', salary: 9000 }
  ]

  movies = [
    { movie_id : 11 , movie_name: 'Suravanshi' , actor_name : 'Akshay' },
    { movie_id : 12 , movie_name: 'Antim' , actor_name : 'Salman' },
    { movie_id : 13 , movie_name: 'Simmba' , actor_name : 'Ranveer' },
    { movie_id : 14 , movie_name: 'Veer zara' , actor_name : 'Sharukh' },
  ]

  books = [
    { book_id : 11 , author_name : 'Alex', no_of_pages : 800 },
    { book_id : 12 , author_name : 'Irvine', no_of_pages : 400 },
    { book_id : 13 , author_name : 'Adward', no_of_pages : 900 },
    { book_id : 14 , author_name : 'Max', no_of_pages : 100 }
  ]

  ngOnInit(): void {
  }

}
