const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret-key'
};

passport.use(new JwtStrategy(options, (payload, done) => {
  // Exemplo de busca de usuário no banco de dados
  const user = { id: payload.id, name: payload.name };
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}));
