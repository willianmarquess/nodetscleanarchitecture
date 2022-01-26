import { CreateDatabaseOperation, GetDatabaseNamesOperation, IDocumentStore } from "ravendb";

export default class RavenDBBootstrap{
    static async booststrap(documentStore: IDocumentStore){
        try {
            const { DB_NAME } = process.env;
            const names = await documentStore.maintenance.server.send(new GetDatabaseNamesOperation(0, 50));
            if (names.indexOf(DB_NAME) === -1) {
                await documentStore.maintenance.server.send(new CreateDatabaseOperation({
                    databaseName: DB_NAME
                }));
            }
        } catch (err) {
            if (err.name === "DatabaseDoesNotExistException") {
                return;
            }
        }
    }
}