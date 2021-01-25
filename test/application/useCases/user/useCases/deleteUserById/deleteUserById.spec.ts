import {UseCaseDeleteUserById} from "../../../../../../src/application/useCases/user/useCases/deleteUserById";
import {UserRepository} from "../../../../../../src/infraestructure/repositories/mysql/user.repository";
import {User} from "../../../../../../src/infraestructure/persistence/mysql/entities/User";


describe("Detele User by id " , () => {
  it("Should return error when delete dosent work  " , async () => {
      // @ts-ignore
      const MockRepository = jest.fn<UserRepository | any>(() => ({
          delete: jest.fn().mockReturnValue({ raw : { affectedRows : 0}}) ,
      }));
      const mock = new MockRepository();

      const useCaseDeleteUserById = new UseCaseDeleteUserById(mock);
      const res =  await useCaseDeleteUserById.Execute(1);

      expect(res.data).toBeUndefined(  );
      expect(res.error).toBeTruthy();
  })
    it("Should  delete correctly " , async () => {
        // @ts-ignore
        const MockRepository = jest.fn<UserRepository | any>(() => ({
            delete: jest.fn().mockReturnValue({ raw : { affectedRows : 1}}) ,
        }));
        const mock = new MockRepository();

        const useCaseDeleteUserById = new UseCaseDeleteUserById(mock);
        const res =  await useCaseDeleteUserById.Execute(1);

        expect(res.data).toBe("User 1 deleted!"  );
        expect(res.error).toBeFalsy();
    })
} )