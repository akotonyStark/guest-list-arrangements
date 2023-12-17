import man from "./assets/man.png"
import woman from "./assets/woman.png"

export const TASKS = [
  {
    id: 1,
    name: 'James',
    gender: 'M',
    tableID: null,
    image(){
      return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 2,
    name: 'John',
    gender: 'M',
    tableID: 2,
    image: function(){
        return  this.gender == 'M' ? man : woman
      },
    assigned: false
  },
  {
    id: 3,
    name: 'Mary',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 4,
    name: 'Jake',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 5,
    name: 'Peggy',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 6,
    name: 'Pam',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 7,
    name: 'Peter',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 8,
    name: 'Jackson',
    gender: 'M',
    tableID: null,
    image(){
      return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 9,
    name: 'Jayden',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
      },
      assigned: false
  },
  {
    id: 10,
    name: 'Maggie',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 11,
    name: 'Jason',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 12,
    name: 'Edna',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 13,
    name: 'Ellie',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 14,
    name: 'Pat',
    gender: 'M',
    tableID: 3,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  }
];
