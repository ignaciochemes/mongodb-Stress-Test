require('dotenv').config();
const { dbConnection } = require('./database/db.config');
const User = require('./models/User.model');
const User2 = require('./models/User2.model');
const User3 = require('./models/User3.model');
const User4 = require('./models/User4.model');

console.log('I will prepare the test!')
setTimeout(readyForTest, 5000);
async function readyForTest() {
    await dbConnection();
    
    let user = {
        name: "test1",
        email: "test1@test.com",
        password: "12345678",
        status: true,
        role: "admin_test"
    }
    
    for(let i = 0; i < 50000; i++) {
        const newUser = new User(user);
        const newUser2 = new User2(user);
        const newUser3 = new User3(user);
        const newUser4 = new User4(user);
        await newUser.save();
        await newUser2.save();
        await newUser3.save();
        await newUser4.save();
        console.log(`User ${i} saved!`)
    } 
};