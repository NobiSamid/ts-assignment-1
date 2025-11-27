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
  return param1
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));