import BaseRouteController from "../base/BaseRouteController";
import {NextFunction, Request, Response} from "../../../infraestructure/webserver/CoreModules";
import {addRole, deleteRoleById, getAllRoles} from "./container";

class RoleController extends BaseRouteController {
    public constructor() {
        super();
        this.InitializeRoutes();
    }

    private InitializeRoutes() {
        this.router.get("/role/list", this.GetListRoles);
        this.router.post("/role", this.AddRole);
        this.router.delete("/role/:id", this.DeleteRoleById);
        /*
        this.router.get("/user/:id", this.GetUserById);

        this.router.put("/user/:id", this.UpdateUserById);*/
    }

    GetListRoles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

             this.HandleResult(res, await getAllRoles.Execute());

        } catch (error) {
            next(error);
        }
    };

    AddRole = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            this.HandleResult(res, await addRole.Execute(req.body));
        }catch (error) {
            next(error);
        }
    }
    DeleteRoleById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = req.params.id.toString();
            this.HandleResult(res, await deleteRoleById.Execute(parseInt(id)));
        }catch (error) {
            next(error);
        }
    }
}

const instance = new RoleController();

export default instance;