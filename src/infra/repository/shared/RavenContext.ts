import { DocumentStore, IDocumentStore } from 'ravendb';

export class RavenContext{
    static getContext(): IDocumentStore{
        const store = new DocumentStore('http://live-test.ravendb.net', 'nodeapi');
        return store.initialize();
    }
}

//http://live-test.ravendb.net