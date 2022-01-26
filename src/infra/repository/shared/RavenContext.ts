import { DocumentStore, IDocumentStore } from 'ravendb';
import * as dotenv from 'dotenv';
dotenv.config(); 

export class RavenContext{
    static getContext(): IDocumentStore{
        const store = new DocumentStore(`http://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.DB_NAME);
        return store.initialize();
    }
}