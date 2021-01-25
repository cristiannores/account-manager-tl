import {UserRepository} from "../../../../../../src/infraestructure/repositories/mysql/user.repository";
import {User} from "../../../../../../src/infraestructure/persistence/mysql/entities/User";
import {UseCaseGetUSerById} from "../../../../../../src/application/useCases/user/useCases/getById";


describe("get User  by ID" , () => {
    it("Should return a user correctly " , async () => {

        let user = new User();
        user  = {
            birthDate:  new Date("1986-06-19"),
            createdDate: new Date(),
            deletedDate: new Date(),
            iduser: 1,
            isActive: 1,
            lastName: "Nores",
            logins: [],
            mail: "cristian.nores@gmail.com",
            phone: 9573863968,
            roles: [],
            rut: 161409081,
            updateDate: new Date(),
            firstName : "Cristian"
        }
        // @ts-ignore
        const MockRepository = jest.fn<UserRepository >(() => ({
            getById : jest.fn().mockResolvedValue(user) ,
        }));
        const mockRepository = new MockRepository();



        const useCaseUserSave = new UseCaseGetUSerById(mockRepository);
        const res =  await useCaseUserSave.Execute(1);

        expect(res.message).toBeUndefined()
        expect(res.data).toStrictEqual(user);
        expect(res.error).toBeUndefined();
    })

    it("Should return user not found" , async () => {


        // @ts-ignore
        const MockRepository = jest.fn<UserRepository >(() => ({
            getById : jest.fn().mockResolvedValue(null) ,
        }));
        const mockRepository = new MockRepository();



        const useCaseUserSave = new UseCaseGetUSerById(mockRepository);
        const res =  await useCaseUserSave.Execute(1);

        expect(res.message).toBeUndefined()
        expect(res.data).toBeUndefined();
        expect(res.error).toBe("User not found");
    })

} )