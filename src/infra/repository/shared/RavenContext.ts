import { DocumentStore, IDocumentStore } from 'ravendb';
import * as dotenv from 'dotenv';
dotenv.config(); 

export class RavenContext{
    static getContext(): IDocumentStore{
        const store = new DocumentStore(process.env.DB_CONTEXT || 'http://localhost:8080', 'nodeapi');
        return store.initialize();
    }
}

//http://live-test.ravendb.net