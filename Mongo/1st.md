use database-name <!-- switch database -->
show dbs <!-- shows all databases -->
show collections <!-- shows all tables -->

db.collection-name.insertOne({name: "", rating: ""}) <!-- For one input>

db.collection-name.insertMany([{name: "", rating: "", difficulty: ""}, {name: "", rating: ""}]) <!-- For multiple inputs. >

db.collection-name.find() <!-- Shows the whole collection / table -->

db.collection-name.find({name: ""}) <!-- Specific search -->

db.collection-name.find( { rating: { $lte 4.5 } } ) <!-- $lte = less than or equal -->

<!-- AND query -->
db.collection-name.find( { rating: { $lte 4.5 } ,  price: { $gte 500 } } ) <!-- rating <= 4.5 && price >= 500 -->

<!-- OR query -->
db.collection-name.find( { $or: [ { price: { $lte 500 } }, { rating: {$gte 4.2} } ] } )

db.collection-name.find( { $or: [ { price: { $lte 500 } }, { rating: {$gte 4.2} } ] }, { name : 1} ) <!-- only show the name column -->