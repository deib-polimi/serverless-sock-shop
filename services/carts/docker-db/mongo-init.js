docker-entrypoint-initdb.d/mongo-init.js
db = new Mongo().getDB("data");
db.createCollection("cart")
db.createCollection("item")
db.getCollection("cart").createIndex({"customerId":"hashed"})
db.getCollection("item").createIndex({"customerId":"hashed"})