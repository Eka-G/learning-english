import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers';
import config from './config';

const bootstrap = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);

  await mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });

  app.listen(config.port, () => console.log(`app listening at http://localhost:${config.port}`));
};

bootstrap();
