var fs = require("fs");
var file = "post.db";
var exists = fs.existsSync(file);
var secret = require('./secret');

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE Posts (text TEXT)");
  }
});

var stmt = db.prepare("INSERT INTO Posts VALUES (?)");

for (var i = 0; i < secret.tweet_roulette.length; i++) {
  stmt.run(secret.tweet_roulette[i]);
}

stmt.finalize();

db.each("SELECT rowid AS id, text FROM Posts", function (err, row) {
  console.log("here is a tweet", row.id, row.text);
})

db.close();
