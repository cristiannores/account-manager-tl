import {
  Column, CreateDateColumn, DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from "typeorm";
import { Login } from "./Login";
import { Role } from "./Role";

@Entity("user", { schema: "account" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "iduser" })
  iduser: number;

  @Column("varchar", { name: "first_name", nullable: true, length: 255 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string | null;

  @Column("int", { name: "rut", nullable: true })
  rut: number | null;

  @Column("int", { name: "phone", nullable: true })
  phone: number | null;

  @Column("varchar", { name: "mail", nullable: true, length: 255 })
  mail: string | null;

  @Column("datetime", { name: "birth_date", nullable: true })
  birthDate: Date | null;

  @Column("tinyint", { name: "is_active", nullable: true })
  isActive: number | null;

  @CreateDateColumn( { name: "created_date", nullable: true })
  createdDate: Date | null;

  @UpdateDateColumn(  { name: "update_date", nullable: true })
  updateDate: Date | null;

  @DeleteDateColumn( { name: "deleted_date", nullable: true })
  deletedDate: Date | null;

  @OneToMany(() => Login, (login) => login.userIduser2)
  logins: Login[];

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: "user_has_role",
    joinColumns: [{ name: "user_iduser", referencedColumnName: "iduser" }],
    inverseJoinColumns: [
      { name: "role_idrole", referencedColumnName: "idrole" },
    ],
    schema: "account",
  })
  roles: Role[];
}
