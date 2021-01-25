import { Server, BodyParser, Application } from "./CoreModules";
import handleError from "../middleware/handleError";
import config from "../config"
import DatabaseClient from "../persistence/mysql";
import RouteManager from "./RouteManager";

export default class App {
    public app: Application;
    constructor(  ) {
    }

    public LoadMiddleware(): void {
        this.app.use(BodyParser.json());
    }

    private LoadControllers(): void {
        RouteManager.getControllersLoaded().forEach((controller) => {
            this.app.use(config.server.root, controller.router);
        });
    }

    private LoadHandleError(): void {
        this.app.use(handleError());
    }


    public async StartWebServer(): Promise<void> {
        this.app =  Server();
        this.LoadMiddleware();
        this.LoadHandleError();
        this.LoadControllers();
        this.HandleOffAppSecure();
        this.app.listen(config.server.port, async () => {
            console.log(
                `Server running on ${config.server.root}${config.server.host}:${config.server.port}`,
            );
        });
    }

    private HandleOffAppSecure(){
        const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2']
        signalTraps.forEach((type) =>
            process.once(type, async () => {
                try {
                   this.StopServices();
                } finally {
                    process.kill(process.pid, type)
                }
            }),
        )
    }
    private StopServices(): void {

    }

    public async Start(): Promise<void> {
        await DatabaseClient.createDatabaseConnection();
        await this.StartWebServer();

    }
}