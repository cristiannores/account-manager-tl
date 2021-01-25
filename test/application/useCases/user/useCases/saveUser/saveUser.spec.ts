import {UserRepository} from "../../../../../../src/infraestructure/repositories/mysql/user.repository";
import {User} from "../../../../../../src/infraestructure/persistence/mysql/entities/User";
import {Validator} from "../../../../../../src/application/shared/validator/Validator";
import {UseCaseUserSave} from "../../../../../../src/application/useCases/user/useCases/saveUser";


describe("Save User " , () => {
    it("Should return error when save dosent work  " , async () => {
        // @ts-ignore
        const MockRepository = jest.fn<UserRepository >(() => ({
            insert : jest.fn().mockResolvedValue({raw : {}}) ,
        }));
        // @ts-ignore
        const MockValidator = jest.fn<Validator, []>(  () =>  ( {
            isValid :  jest.fn().mockResolvedValue( {status : false })
        }));
        const mockRepository = new MockRepository();
        const mockValidator = new MockValidator();
        const user = new User();


        const useCaseUserSave = new UseCaseUserSave(mockRepository,mockValidator);
        const res =  await useCaseUserSave.Execute(user);

        expect(res.message).toBeUndefined()
        expect(res.data).toBeUndefined();
        expect(res.error).toStrictEqual({"data": undefined, "message": "Can`t insert user "});
    })

    it("Should save successufly  " , async () => {
        // @ts-ignore
        const MockRepository = jest.fn<UserRepository >(() => ({
            insert : jest.fn().mockResolvedValue({raw : {}}) ,
        }));
        // @ts-ignore
        const MockValidator = jest.fn<Validator, []>(  () =>  ( {
            isValid :  jest.fn().mockResolvedValue( {status : true })
        }));
        const mockRepository = new MockRepository();
        const mockValidator = new MockValidator();
        const user = new User();


        const useCaseUserSave = new UseCaseUserSave(mockRepository,mockValidator);
        const res =  await useCaseUserSave.Execute(user);

        expect(res.message).toBeUndefined()
        expect(res.data).toStrictEqual({});
        expect(res.error).toBeUndefined(  );
    })

} )