var sqlMap = {
    user: {
        add: 'insert into user(name, age) values (?, ?)',
        select: 'select * from user'
    }
}
module.exports = sqlMap;