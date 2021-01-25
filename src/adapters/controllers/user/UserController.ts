import BaseRouteController from "../base/BaseRouteController";
import {deleteUserById, getAllUsers, getUSerById, saveUser, updateUserById} from "./container";
import { Request, Response, NextFunction } from "../../../infraestructure/webserver/CoreModules";


class UserController extends BaseRouteController {
    public constructor() {
        super();
        this.InitializeRoutes();
    }

    private InitializeRoutes() {
        this.router.get("/user/list", this.GetListUser);
        this.router.get("/user/:id", this.GetUserById);
        this.router.post("/user", this.SaveUser);
        this.router.delete("/user/:id", this.DeleteUserByID);
        this.router.put("/user/:id", this.UpdateUserById);
    }

    GetListUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            this.HandleResult(res, await getAllUsers.Execute());
        } catch (error) {
            next(error);
        }
    };

    GetUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const id =  req.params.id.toString();
            this.HandleResult(res, await getUSerById.Execute(parseInt(id)));
        } catch (error) {
            next(error);
        }
    };

    SaveUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const userJson =  req.body;
            this.HandleResult(res, await saveUser.Execute(userJson));
        } catch (error) {
            next(error);
        }
    };

    DeleteUserByID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const id =  parseInt(req.params.id.toString());
            this.HandleResult(res, await deleteUserById.Execute(id));
        } catch (error) {
            next(error);
        }
    };

    UpdateUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const id =  parseInt(req.params.id.toString());
            const userJson =  req.body;
            this.HandleResult(res, await updateUserById.Execute(userJson,id));
        } catch (error) {
            next(error);
        }
    };

}

const instance = new UserController();

export default instance;