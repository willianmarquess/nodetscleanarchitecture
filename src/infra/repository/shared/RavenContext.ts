import { DocumentStore, IDocumentStore } from 'ravendb';
import * as dotenv from 'dotenv';
dotenv.config(); 

export class RavenContext{
    static getContext(): IDocumentStore{
        const store = new DocumentStore(process.env.DB_CONTEXT, process.env.DB_NAME);
        return store.initialize();
    }
}