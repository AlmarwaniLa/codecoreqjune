// Update with your config settings.

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            database: "projectt",
        },
        migrations: {
            tablename: "migrations",
            directory: "./db/migrations",
        },

        seeds: {
            directory: "./db/seeds",
        },
    }
};




//staging: {
//client: 'postgresql',
//connection: {
//database: 'my_db',
//user: 'username',
// password: 'password'


module.exports = {}