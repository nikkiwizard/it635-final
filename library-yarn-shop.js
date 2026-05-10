// library_yarn_mongo_setup.js

use library_yarn_store

db.dropDatabase()

db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "author", "genre", "totalCopies", "availableCopies"],
      properties: {
        title: {
          bsonType: "string"
        },
        author: {
          bsonType: "string"
        },
        genre: {
          bsonType: "string"
        },
        isbn: {
          bsonType: "string"
        },
        totalCopies: {
          bsonType: "int",
          minimum: 0
        },
        availableCopies: {
          bsonType: "int",
          minimum: 0
        }
      }
    }
  }
})

db.createCollection("yarn")

db.createCollection("patrons")

db.createCollection("employees")

db.createCollection("transactions")