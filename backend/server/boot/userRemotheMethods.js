'use strict';

module.exports = (app) => {
  var User = app.models.user;
  var AccessToken = app.models.AccessToken;
  var UserIdentity = app.models.userIdentity;
  UserIdentity.validateInfo = (socialUser, cb) => {
    if (!socialUser) return cb('No se recibio la info');
    UserIdentity.find({'where': {'externalId': socialUser.id}},(err, info) => {
      if (err) throw err;

      if (!info) return cb('Error en el servidor', {status: 500});

      if (info.length == 0) {
        User.find({'where': {'email': socialUser.email}}, (err, userData) => {

          console.log(userData);


          if (err) throw err;

          if(!userData) return cb('Internal error', {status: 500});

          if (userData.length == 0) {
            let user = {
              name: socialUser.firstName,
              lastname: socialUser.lastName,
              photo: socialUser.photoUrl,
              email: socialUser.email,
              password: socialUser.id
            }
            User.create(user, (err, UserCreated) => {
              if (err) throw err;

              console.log('User Created:', UserCreated);

              let useridentity = {
                provider: socialUser.provider,
                externalId: socialUser.id,
                profile: {socialUser},
                userId: UserCreated.id
              }

              UserIdentity.create(useridentity, (err, userIdentitySave) => {
                if (err) throw err;

                console.log('UserIdentity Created:', userIdentitySave);
              });

              AccessToken.create({
                id: socialUser.authToken,
                userId: UserCreated.id
              },
              (err, accessTokenCreated) => {
                if (err) throw err;

                console.log('Session Go:', accessTokenCreated);
                return cb(null, {status: 201, msg: 'hol3', id: accessTokenCreated.id, userId: accessTokenCreated.userId });
              });
            });
          } else {

            let useridentity = {
              provider: socialUser.provider,
              externalId: socialUser.id,
              profile: {socialUser},
              userId: userData[0].id
            }

            UserIdentity.create(useridentity, (err, userIdentitySave) => {
              if (err) throw err;

              console.log('UserIdentity Created:', userIdentitySave);
            });

            AccessToken.create({
              id: socialUser.authToken,
              userId: userData[0].id
            },
            (err, accessTokenCreated) => {
              if (err) throw err;

              console.log('Session Go:', accessTokenCreated);
              cb(null, {status: 201, msg: 'hol2', id: accessTokenCreated.id, userId: accessTokenCreated.userId });
            });
          }
        });
      } else {
        AccessToken.create({
          id: socialUser.authToken,
          userId: info[0].userId
        },
        (err, accessTokenCreated) => {
          if (err) throw err;
          console.log('Session Go:', accessTokenCreated);
          return cb(null, {status: 201, msg: 'hol1', id: accessTokenCreated.id, userId: accessTokenCreated.userId });
        });
      }
    });
  }

  UserIdentity.remoteMethod(
    'validateInfo', {
      accepts: {
        arg: 'socialUser',
        type: 'object',
        required: true,
      },
      returns: {
        arg: 'info',
        type: 'object',
      },
    }
  );
};
