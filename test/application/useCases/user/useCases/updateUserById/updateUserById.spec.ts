import {UseCaseDeleteUserById} from "../../../../../../src/application/useCases/user/useCases/deleteUserById";
import {UserRepository} from "../../../../../../src/infraestructure/repositories/mysql/user.repository";
import {User} from "../../../../../../src/infraestructure/persistence/mysql/entities/User";
import {UseCaseUserUpdateById} from "../../../../../../src/application/useCases/user/useCases/updateUserById";
import {Validator} from "../../../../../../src/application/shared/validator/Validator";
import {isValidationOptions} from "class-validator";


describe("Detele User by id " , () => {
  it("Should return error when delete dosent work  " , async () => {
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
      expect(res.error).toStrictEqual({"data": undefined, "message": "Can`t update user "});
  })

} )