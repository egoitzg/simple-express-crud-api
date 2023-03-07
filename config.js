const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost:3306",
      user: "root",
      password: "",
      database: "library",
    },
    /* listPerPage: 10, */
  };
  module.exports = config;