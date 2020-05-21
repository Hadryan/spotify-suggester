const db = require('../persistence');

module.exports = async (req, res) => {
   const users = await db.getUsers().catch((error) => {
      res.send('Error getting users from database: ' + error);
   });
   res.send(users);
};