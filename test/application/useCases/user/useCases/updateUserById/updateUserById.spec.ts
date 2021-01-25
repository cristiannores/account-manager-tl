import {UserRepository} from "../../../../../../src/infraestructure/repositories/mysql/user.repository";
import {User} from "../../../../../../src/infraestructure/persistence/mysql/entities/User";
import {UseCaseUserUpdateById} from "../../../../../../src/application/useCases/user/useCases/updateUserById";
import {Validator} from "../../../../../../src/application/shared/validator/Validator";


describe("Detele User by id " , () => {
  it("Should return error when update dosent work  " , async () => {
      // @ts-ignore
      const MockRepository = jest.fn<UserRepository >(() => ({
          updateById : jest.fn().mockResolvedValue({ raw : { affectedRows : 0}}) ,
      }));
      // @ts-ignore
      const MockValidator = jest.fn<Validator, []>(  () =>  ( {
          isValid :  jest.fn().mockResolvedValue( {status : true })
      }));
      const mockRepository = new MockRepository();
      const mockValidator = new MockValidator();
      const user = new User();


      const useCaseDeleteUserById = new UseCaseUserUpdateById(mockRepository,mockValidator);
      const res =  await useCaseDeleteUserById.Execute(user,1);

      expect(res.message).toBeUndefined()
      expect(res.data).toBeUndefined(  );
      expect(res.error).toBe("Nothing change");
  })


    it("Should update correctly " , async () => {
        // @ts-ignore
        const MockRepository = jest.fn<UserRepository >(() => ({
            updateById : jest.fn().mockResolvedValue({ raw : { affectedRows : 1}}) ,
        }));
        // @ts-ignore
        const MockValidator = jest.fn<Validator, []>(  () =>  ( {
            isValid :  jest.fn().mockResolvedValue( {status : true })
        }));
        const mockRepository = new MockRepository();
        const mockValidator = new MockValidator();
        const user = new User();


        const useCaseDeleteUserById = new UseCaseUserUpdateById(mockRepository,mockValidator);
        const res =  await useCaseDeleteUserById.Execute(user,1);

        expect(res.message).toBeUndefined()
        expect(res.data).toBe(" User with id:  1  udpated with values {}");
        expect(res.error).toBeUndefined();
    })

    it("Should return error when update dosent work  " , async () => {
        // @ts-ignore
        const MockRepository = jest.fn<UserRepository >(() => ({
            updateById : jest.fn().mockResolvedValue({ raw : { affectedRows : 0}}) ,
        }));
        // @ts-ignore
        const MockValidator = jest.fn<Validator, []>(  () =>  ( {
            isValid :  jest.fn().mockResolvedValue( {status : false , errors : ["an error in something"] })
        }));
        const mockRepository = new MockRepository();
        const mockValidator = new MockValidator();
        const user = new User();


        const useCaseDeleteUserById = new UseCaseUserUpdateById(mockRepository,mockValidator);
        const res =  await useCaseDeleteUserById.Execute(user,1);

        expect(res.message).toBeUndefined()
        expect(res.data).toBeUndefined(  );
        expect(res.error).toStrictEqual({
            "data": [
                "an error in something"
            ],
            "message": "Can`t update user "
        });
    })

} )