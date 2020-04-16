use database-name <!-- switch database -->
show dbs <!-- shows all databases -->
show collections <!-- shows all tables -->

db.collection-name.insertOne({name: "", rating: ""}) <!-- For one input>

db.collection-name.insertMany([{name: "", rating: "", difficulty: ""}, {name: "", rating: ""}]) <!-- For multiple inputs. >

db.collection-name.find() <!-- Shows the whole collection / table -->