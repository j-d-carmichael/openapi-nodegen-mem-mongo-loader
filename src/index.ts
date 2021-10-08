import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

class OpenapiNodegenMemMongoLoader {

  static mongoServer: any = {};

  async setup () {
    // Load the memory database and oass uri to mongoose
    OpenapiNodegenMemMongoLoader.mongoServer = await MongoMemoryServer.create();
    const uri = OpenapiNodegenMemMongoLoader.mongoServer.getUri();

    await mongoose.connect(uri, {
      poolSize: 15,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }

  async teardown () {
    await mongoose.disconnect();
    await OpenapiNodegenMemMongoLoader.mongoServer.stop();
  }
}

export default new OpenapiNodegenMemMongoLoader();
