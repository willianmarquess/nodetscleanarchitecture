import express from 'express';
import { routesController } from './routes/routesController';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import {swaggerConfig} from '../util/swagger-config';
import * as dotenv from 'dotenv';
import RavenDBBootstrap from './infra/RavenDBBootstrap';
import { ravenContext } from '../infra/repository/shared';
dotenv.config();  

const app = express();
const port = process.env.SERVER_PORT || 3000;


const specs = swaggerJsDoc(swaggerConfig);

app.use(express.json());
app.use(routesController); 
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port, async () => {
    await RavenDBBootstrap.booststrap(ravenContext);
    console.log(`Server running at: http://localhost:${port}`);
});

export default app;
