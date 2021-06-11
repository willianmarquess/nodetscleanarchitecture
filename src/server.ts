import express from 'express';
import { routesController } from './routes/routesController';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import {swaggerConfig} from './util/swagger-config';
import * as dotenv from 'dotenv';
dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;

const specs = swaggerJsDoc(swaggerConfig);

app.use(express.json());
app.use(routesController); 
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});
