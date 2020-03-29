'use strict'

module.exports = function(app) {
  var lbTables = [
    'user',
    'Ropa',
    'ACL',
    'AccessToken',
    'RoleMapping',
    'Role',
    'userIdentity'
  ];
  var ds = app.dataSources.mySqlRopa;
  var User = app.models.user;

  ds.isActual(lbTables, (err, actual) => {
    if (err) throw err;

    if(!actual) {
      ds.autoupdate(lbTables, (err) => {
        if (err) throw err;

        User.create(
          {
            name: 'Juan Felipe',
            lastname: 'González Ortiz',
            phone: '3165826224',
            email: 'juangonzalez@devneedzaio.com',
            password: 'felipe'
          }
        );
      });
    }
  });
};
