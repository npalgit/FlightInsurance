//exports.DB_URL = 'mongodb://localhost:27017/insurance';

exports.DB_URL = 'mongodb://mongo:27017/insurance';


exports.setMongoUri = () => {

    if (!process.env.MONGO_URI) {

  
      switch(process.env.NODE_ENV) {
  
        case 'development':

          process.env.MONGO_URI = 'mongodb://localhost:27017/insurance';
          console.log(`MONGO_URI  ${process.env.MONGO_URI}`);
          break;
  
        case 'production':
  
          process.env.MONGO_URI = 'mongodb://mongo:27017/insurance';
          console.log(`MONGO_URI  ${process.env.MONGO_URI}`);
          break;
  
        default:
  
          process.env.MONGO_URI = 'mongodb://mongo:27017/insurance';
          console.log(`MONGO_URI  ${process.env.MONGO_URI}`);
          console.log('By default seting up docker container connection string');
          break;
      }
    }
  
    return;
  }