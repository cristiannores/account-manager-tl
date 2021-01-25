import {RoleRepository} from "../../../../../../src/infraestructure/repositories/mysql/role.repository";
import {Role} from "../../../../../../src/infraestructure/persistence/mysql/entities/Role";
import {UseCaseGetAllRoles} from "../../../../../../src/application/useCases/role/useCases/getAllRoles";

describe("getAllRoles test " , () => {
    it ( "Shoudl delete role correctly" ,  async() => {
        let role = new Role();
        role =  {
            accessModules: [],
            createdDate: new Date(),
            deletedDate: null,
            idrole: 1,
            name: "Professional",
            updatedDate: new Date(),
            users: []

        }

        // @ts-ignore
        const MockRepository = jest.fn<RoleRepository >(() => ({
            getAll : jest.fn().mockResolvedValue([role]) ,
        }));

        const mockRepository = new MockRepository();
        const useCaseAddRole = new UseCaseGetAllRoles(mockRepository);

        const res =  await  useCaseAddRole.Execute()

        expect(res.message).toBeUndefined();
        expect(res.error).toBeUndefined();
        expect(res.statusCode).toBe(200);
        expect(res.data).toStrictEqual([role]);

    })
    it ( "Should return error when save dosent work" ,  async() => {

        // @ts-ignore
        const MockRepository = jest.fn<RoleRepository >(() => ({
            getAll : jest.fn().mockResolvedValue(null) ,
        }));

        const mockRepository = new MockRepository();
        const useCaseAddRole = new UseCaseGetAllRoles(mockRepository);

        const res =  await  useCaseAddRole.Execute()

        expect(res.message).toBeUndefined();
        expect(res.error).toBe("Roles not found");
        expect(res.statusCode).toBe(404);
        expect(res.data).toBeUndefined();

    })
})