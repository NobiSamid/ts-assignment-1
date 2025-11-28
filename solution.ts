const formatValue = (param1: string | number | boolean) : string | number | boolean =>{
  if( typeof param1 === "string" ){
    param1 = param1.toUpperCase()
  } else if( typeof param1 === 'number'){
    param1 = param1 * 10
  } else if( typeof param1 === 'boolean'){
    param1 = !param1 
  } else{
    param1 = "Invalid input"
  }
  return param1;
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

const getLength = (param2: string | [ string, number, boolean] ) => {
  if (typeof param2 === 'string'){
    return param2.length;
  } else if ( Array.isArray(param2) ){
    return param2.length
  } else{
    return "invalid input"
  }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));


// type PersonType {
//   name: string, age: number
// }

class Person{
  name: string;
  age: number;
  details: string

  constructor( name: string, age: number){
    this.name = name;
    this.age = age
    this.details = `'Name: ${this.name}, Age: ${this.age}'`
  }

  getDetails(){
    return this.details
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

interface Books {
  title: string;
  rating: string;
}

const filterByRating = (books: { title: string; rating: number }[]) : Books[] =>{
  return books.filter(book => book.rating >= 4.0).map(book => ({...book, rating: book.rating.toFixed(1)}))
}


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
// console.log(
//   filterByRating(books).map(book => ({
//     ...book,
//     rating: book.rating.toFixed(1) // now rating is a string like "5.0"
//   }))
// );


