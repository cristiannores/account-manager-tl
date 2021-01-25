import {
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "./User";
import { AccessModules } from "./AccessModules";

@Entity("role", { schema: "account" })
export class Role {
  @PrimaryGeneratedColumn({ type: "int", name: "idrole" })
  idrole: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @CreateDateColumn( { name: "created_date"})
  createdDate: Date ;

  @UpdateDateColumn( { name: "updated_date" })
  updatedDate: Date ;

  @DeleteDateColumn({ name: "deleted_date" })
  deletedDate: Date ;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];

  @OneToMany(() => AccessModules, (accessModules) => accessModules.roleIdrole2)
  accessModules: AccessModules[];
}
