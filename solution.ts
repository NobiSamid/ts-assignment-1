const formatValue = (param1: string | number | boolean): string | number | boolean => {
  if (typeof param1 === "string") {
    param1 = param1.toUpperCase()
  } else if (typeof param1 === 'number') {
    param1 = param1 * 10
  } else if (typeof param1 === 'boolean') {
    param1 = !param1
  } else {
    param1 = "Invalid input"
  }
  return param1;
}



const getLength = (param2: string | [string, number, boolean]) => {
  if (typeof param2 === 'string') {
    return param2.length;
  } else if (Array.isArray(param2)) {
    return param2.length
  } else {
    return "invalid input"
  }
}




class Person {
  name: string;
  age: number;
  details: string

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
    this.details = `'Name: ${this.name}, Age: ${this.age}'`
  }

  getDetails() {
    return this.details
  }
}




interface Goods {
  title: string;
  rating: number;
}

const filterByRating = (goods: Goods[]): Goods[] => {
  return goods.filter(item => item.rating >= 4.0).map(item => ({ ...item, rating: Number(item.rating.toFixed(1)) }))
}





interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.isActive === true)
}




interface Book {
  title: string
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  let availability = 'No'
  if (book.isAvailable == true) {
    availability = 'Yes'
  }
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
}




const getUniqueValues = (arr1: any[], arr2: any[]) => {
  const result: any[] = [...arr1, ...arr2]
  const uniqueArr: any[] = []

  for (let i = 0; i < result.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (result[i] === uniqueArr[j]) {
        isDuplicate = true;
        break
      }
    }

    if (!isDuplicate) {
      uniqueArr.push(result[i])
    }
  }
  return uniqueArr;
}



interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Products[]): number => {
  let totalPrice = 0
  products.map(product => {
    if (product.discount !== undefined) {
      totalPrice = totalPrice + ((product.price - (product.price * (product.discount / 100))) * product.quantity)
    } else if (product.discount === undefined) {
      totalPrice = totalPrice + (product.price * product.quantity)
    }
  })
  return totalPrice
}