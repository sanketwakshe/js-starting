// for each loop value return nahi karta result undefine deta hai

// jo true hoga vahi pass hoga

// filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter((num)=>{
    return num > 4
})
//console.log(newNum);


const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      publishedYear: 1851
    }
  ];
  
  let userBooks = books.filter((bk)=>{
    return bk.publishedYear > 1888
  })
  
   console.log(userBooks);
  