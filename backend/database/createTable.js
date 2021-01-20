function createTable(err) {
  if (err) {
    return console.error(`Error: ${err.message}`);
  }

  let createTasks = `create table if not exists allTasks(
                          id int primary key auto_increment,
                          message varchar(255)not null,
                          completed tinyint(1) not null default 0
                      )`;

  connection.query(createTasks, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
};

module.exports = createTable