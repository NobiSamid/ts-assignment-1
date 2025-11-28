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

interface Products {
  title: string;
  rating: number;
}

const filterByRating = (products: Products[]) : Products[] =>{
  return books.filter(product => product.rating >= 4.0).map(product => ({...product, rating: Number(product.rating.toFixed(1))}))
}


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));


interface User{
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]) : User[] =>{
  return users.filter( user => user.isActive === true)
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


interface Book{
  title: string
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) =>{
  let availability = 'No'
  if (book.isAvailable == true){
    availability = 'Yes'
  }
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

// printBookDetails(myBook);


const getUniqueValues = (arr1: any[], arr2: any[] ) =>{
  const result: any[] = [...arr1, ...arr2]
  const uniqueArr: any[] = []

  for (let i = 0; i < result.length; i++){
    let isDuplicate = false;

    for (let j=0; j < uniqueArr.length; j++){
      if (result[i] === uniqueArr[j]){
        isDuplicate = true;
        break
      }
    }

    if(!isDuplicate){
      uniqueArr.push(result[i])
    }
  }
  return uniqueArr;
}

// const array1 = [1, 2, 3, 4, 5, true, 'cat', false, 'cat'];
// const array2 = [3, 4, 5, 6, 7, false];
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));


