import BaseRouteController from "../../adapters/controllers/base/BaseRouteController";
import UserController from "../../adapters/controllers/user/UserController";
import RoleController from "../../adapters/controllers/role/RoleController";

class RouteManager {

    constructor() { }

    public getControllersLoaded(  )  {
        const controllers : BaseRouteController[] = [ UserController, RoleController  ];
        return controllers;
    }
}

const instance =  new RouteManager();
export default  instance;