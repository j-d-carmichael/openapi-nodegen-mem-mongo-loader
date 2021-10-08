import OpenapiNodegenMemMongoLoader from '../index';

it('should setup ok', (done) => {
  OpenapiNodegenMemMongoLoader.setup()
    .then(done)
    .catch(e => done(e));
});

it('should stop ok', (done) => {
  OpenapiNodegenMemMongoLoader.teardown()
    .then(done)
    .catch(e => done(e));
});
