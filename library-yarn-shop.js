// library_yarn_mongo_setup.js

use library_yarn_store

db.dropDatabase()

db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "author", "genre", "totalCopies", "availableCopies"],
      properties: {
        title: { bsonType: "string" },
        author: { bsonType: "string" },
        genre: { bsonType: "string" },
        isbn: { bsonType: "string" },
        totalCopies: { bsonType: "int", minimum: 0 },
        availableCopies: { bsonType: "int", minimum: 0 }
      }
    }
  }
})

db.createCollection("yarn", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["brand", "color", "weightCategory", "fiberType", "price", "quantityInStock"],
      properties: {
        brand: { bsonType: "string" },
        color: { bsonType: "string" },
        weightCategory: { bsonType: "string" },
        fiberType: { bsonType: "string" },
        price: { bsonType: "double", minimum: 0 },
        quantityInStock: { bsonType: "int", minimum: 0 }
      }
    }
  }
})

db.createCollection("patrons")

db.createCollection("employees")

db.createCollection("transactions")

db.books.insertMany([
  {
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    genre: "Romance",
    isbn: "9780593336823",
    totalCopies: 5,
    availableCopies: 5
  },
  {
    title: "Love on the Brain",
    author: "Ali Hazelwood",
    genre: "Romance",
    isbn: "9780593336847",
    totalCopies: 4,
    availableCopies: 4
  },
  {
    title: "Love, Theoretically",
    author: "Ali Hazelwood",
    genre: "Romance",
    isbn: "9780593336861",
    totalCopies: 5,
    availableCopies: 5
  },
  {
    title: "King of Wrath",
    author: "Ana Huang",
    genre: "Romance",
    isbn: "9781728289735",
    totalCopies: 4,
    availableCopies: 4
  },
  {
    title: "King of Pride",
    author: "Ana Huang",
    genre: "Romance",
    isbn: "9781728289742",
    totalCopies: 4,
    availableCopies: 4
  },
  {
    title: "King of Greed",
    author: "Ana Huang",
    genre: "Romance",
    isbn: "9781728289759",
    totalCopies: 4,
    availableCopies: 4
  },
  {
    title: "Kingdom of the Wicked",
    author: "Kerri Maniscalco",
    genre: "Fantasy Romance",
    isbn: "9780316428460",
    totalCopies: 5,
    availableCopies: 5
  }
])

db.yarn.insertMany([
  {
    brand: "Red Heart Super Saver",
    color: "Cherry Red",
    weightCategory: "Worsted",
    fiberType: "Acrylic",
    price: 4.99,
    quantityInStock: 50
  },
  {
    brand: "Lion Brand Wool-Ease",
    color: "Fisherman",
    weightCategory: "Worsted",
    fiberType: "Wool Blend",
    price: 7.49,
    quantityInStock: 35
  },
  {
    brand: "Bernat Blanket Yarn",
    color: "Vintage White",
    weightCategory: "Super Bulky",
    fiberType: "Polyester",
    price: 9.99,
    quantityInStock: 20
  },
  {
    brand: "Caron Simply Soft",
    color: "Soft Blue",
    weightCategory: "Worsted",
    fiberType: "Acrylic",
    price: 5.99,
    quantityInStock: 40
  },
  {
    brand: "Malabrigo Rios",
    color: "Teal Feather",
    weightCategory: "Worsted",
    fiberType: "Merino Wool",
    price: 16.50,
    quantityInStock: 15
  }
])

db.patrons.insertMany([
  {
    firstName: "Leon",
    lastName: "Kennedy",
    phoneNumber: "555-444-5555",
    email: "leon@gmail.com",
    membershipDate: new Date()
  },
  {
    firstName: "Theo",
    lastName: "James",
    phoneNumber: "555-555-6666",
    email: "theo@gmail.com",
    membershipDate: new Date()
  },
  {
    firstName: "Tom",
    lastName: "Welling",
    phoneNumber: "555-666-7777",
    email: "tom@gmail.com",
    membershipDate: new Date()
  }
])

db.employees.insertMany([
  {
    firstName: "Nicole",
    lastName: "Campos",
    jobTitle: "Manager",
    hireDate: new Date("2024-08-15"),
    email: "nicole@libraryyarn.com"
  },
  {
    firstName: "David",
    lastName: "Monte",
    jobTitle: "Clerk",
    hireDate: new Date("2025-01-10"),
    email: "david@libraryyarn.com"
  }
])

db.transactions.insertMany([
  {
    transactionType: "book checkout",
    bookTitle: "The Love Hypothesis",
    patronEmail: "leon@gmail.com",
    employeeEmail: "nicole@libraryyarn.com",
    checkoutDate: new Date(),
    dueDate: new Date("2026-05-24")
  },
  {
    transactionType: "yarn sale",
    yarnBrand: "Malabrigo Rios",
    color: "Teal Feather",
    patronEmail: "theo@gmail.com",
    employeeEmail: "david@libraryyarn.com",
    quantitySold: 2,
    totalAmount: 33.00,
    saleDate: new Date()
  }
])

db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1 })
db.yarn.createIndex({ brand: 1 })
db.patrons.createIndex({ email: 1 }, { unique: true })
db.employees.createIndex({ email: 1 }, { unique: true })