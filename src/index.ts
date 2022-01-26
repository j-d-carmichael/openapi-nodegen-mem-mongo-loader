import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

class OpenapiNodegenMemMongoLoader {

  static mongoServer: any = {};

  async setup () {
    // Load the memory database and oass uri to mongoose
    OpenapiNodegenMemMongoLoader.mongoServer = await MongoMemoryServer.create();
    const uri = OpenapiNodegenMemMongoLoader.mongoServer.getUri();

    const DEFAULT_OPTIONS = mongoose.version.startsWith('6.')
      ? {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
      : {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      };

    // @ts-ignore
    await mongoose.connect(uri, DEFAULT_OPTIONS);
  }

  async teardown () {
    await mongoose.disconnect();
    await OpenapiNodegenMemMongoLoader.mongoServer.stop();
  }
}

export default new OpenapiNodegenMemMongoLoader();
