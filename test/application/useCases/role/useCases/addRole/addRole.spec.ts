import {UseCaseAddRole} from "../../../../../../src/application/useCases/role/useCases/addRole";
import {RoleRepository} from "../../../../../../src/infraestructure/repositories/mysql/role.repository";
import {Role} from "../../../../../../src/infraestructure/persistence/mysql/entities/Role";
import {Validator} from "../../../../../../src/application/shared/validator/Validator";

describe("getAllRoles test " , () => {
    it ( "Shoudl add role correctly" ,  async() => {

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
            insert : jest.fn().mockResolvedValue({raw : role}) ,
        }));
        // @ts-ignore
        const MockValidator = jest.fn<Validator, []>(  () =>  ( {
            isValid :  jest.fn().mockResolvedValue( {status : true })
        }));


        const mockRepository = new MockRepository();
        const mockValidator = new MockValidator();
        const useCaseAddRole = new UseCaseAddRole(mockRepository,mockValidator);

        const res =  await  useCaseAddRole.Execute(role)


        expect(res.message).toBeUndefined();
        expect(res.error).toBeUndefined();
        expect(res.statusCode).toBe(200);
        expect(res.data).toStrictEqual(role);
    })
    it ( "Should return error when save dosent work" ,  async() => {

        let role: Role;
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
            insert : jest.fn().mockResolvedValue({raw : {}}) ,
        }));
        // @ts-ignore
        const MockValidator = jest.fn<Validator, []>(  () =>  ( {
            isValid :  jest.fn().mockResolvedValue( {status : false })
        }));


        const mockRepository = new MockRepository();
        const mockValidator = new MockValidator();
        const useCaseAddRole = new UseCaseAddRole(mockRepository,mockValidator);

        const res =  await  useCaseAddRole.Execute(role)


        expect(res.message).toBeUndefined();
        expect(res.error).toStrictEqual({"data": {"status": false}, "message": "Can`t inserted user "});
        expect(res.statusCode).toBe(400);
        expect(res.data).toBeUndefined();
    })
})