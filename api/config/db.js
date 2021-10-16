
module.exports = function (config) {

    config.db.serialize(function () {
        config.db.run("CREATE TABLE IF NOT EXISTS users ( \
      username TEXT UNIQUE, \
      hashed_password BLOB, \
      salt BLOB, \
      name TEXT \
    )");
    });
};
