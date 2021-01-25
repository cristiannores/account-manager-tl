import {RoleRepository} from "../../../../../../src/infraestructure/repositories/mysql/role.repository";
import {UseCaseDeleteRoleById} from "../../../../../../src/application/useCases/role/useCases/deleteRole";

describe("getAllRoles test " , () => {
    it ( "Shoudl delete role correctly" ,  async() => {


        // @ts-ignore
        const MockRepository = jest.fn<RoleRepository >(() => ({
            delete : jest.fn().mockResolvedValue({raw : { affectedRows : 1}}) ,
        }));


        const mockRepository = new MockRepository();
        const useCaseAddRole = new UseCaseDeleteRoleById(mockRepository);

        const res =  await  useCaseAddRole.Execute(1)


        expect(res.message).toBeUndefined();
        expect(res.error).toBeUndefined();
        expect(res.statusCode).toBe(200);
        expect(res.data).toStrictEqual("Role 1 deleted!");
    })
    it ( "Should return error when save dosent work" ,  async() => {


        // @ts-ignore
        const MockRepository = jest.fn<RoleRepository >(() => ({
            delete : jest.fn().mockResolvedValue({raw : {affectedRows: 0}}) ,
        }));



        const mockRepository = new MockRepository();
        const useCaseAddRole = new UseCaseDeleteRoleById(mockRepository);

        const res =  await  useCaseAddRole.Execute(4)


        expect(res.message).toBeUndefined();
        expect(res.error).toStrictEqual({
            "data": {
                "raw": {
                    "affectedRows": 0
                }
            },
            "message": "Can`t Delete"
        });
        expect(res.statusCode).toBe(404);
        expect(res.data).toBeUndefined();
    })
})