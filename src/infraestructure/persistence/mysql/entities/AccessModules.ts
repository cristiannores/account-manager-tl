import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Role } from "./Role";

@Index("fk_access_modules_role1_idx", ["roleIdrole"], {})
@Entity("access_modules", { schema: "account" })
export class AccessModules {
  @Column("int", { primary: true, name: "idaccess_modules" })
  idaccessModules: number;

  @Column("varchar", { name: "module", nullable: true, length: 255 })
  module: string | null;

  @Column("varchar", { name: "controller", nullable: true, length: 255 })
  controller: string | null;

  @Column("tinyint", { name: "has_access", nullable: true })
  hasAccess: number | null;

  @Column("datetime", { name: "created_date", nullable: true })
  createdDate: Date | null;

  @Column("datetime", { name: "updated_date", nullable: true })
  updatedDate: Date | null;

  @Column("datetime", { name: "deleted_date", nullable: true })
  deletedDate: Date | null;

  @Column("int", { name: "role_idrole" })
  roleIdrole: number;

  @ManyToOne(() => Role, (role) => role.accessModules, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "role_idrole", referencedColumnName: "idrole" }])
  roleIdrole2: Role;
}
