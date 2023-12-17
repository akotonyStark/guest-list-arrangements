import man from "./assets/man.png"
import woman from "./assets/woman.png"

export const TASKS = [
  {
    id: 1,
    name: 'Damilola Ajayi',
    gender: 'M',
    tableID: null,
    image(){
      return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 2,
    name: 'Augustine Ampofo',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
      },
    assigned: false
  },
  {
    id: 3,
    name: 'Veronica Dogbegah',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 4,
    name: 'Senyo Rockson',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 5,
    name: 'Jay Nunana',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 6,
    name: 'Dela Malaika',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 7,
    name: 'Peter Parker',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 8,
    name: 'Michael Jackson',
    gender: 'M',
    tableID: null,
    image(){
      return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 9,
    name: 'Jayden Smith',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
      },
      assigned: false
  },
  {
    id: 10,
    name: 'Maggie Carter',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 11,
    name: 'Jason Bourne',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 12,
    name: 'Miss Edna ',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 13,
    name: 'Ellie Gould',
    gender: 'F',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  },
  {
    id: 14,
    name: 'Patrick Wilson',
    gender: 'M',
    tableID: null,
    image: function(){
        return  this.gender == 'M' ? man : woman
    },
    assigned: false
  }
];
