import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("fk_login_user_idx", ["userIduser"], {})
@Entity("login", { schema: "account" })
export class Login {
  @PrimaryGeneratedColumn({ type: "int", name: "idlogin" })
  idlogin: number;

  @Column("varchar", { name: "page", nullable: true, length: 255 })
  page: string | null;

  @Column("datetime", { name: "created_date", nullable: true })
  createdDate: Date | null;

  @Column("datetime", { name: "updated_date", nullable: true })
  updatedDate: Date | null;

  @Column("datetime", { name: "deleted_date", nullable: true })
  deletedDate: Date | null;

  @Column("int", { primary: true, name: "user_iduser" })
  userIduser: number;

  @ManyToOne(() => User, (user) => user.logins, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_iduser", referencedColumnName: "iduser" }])
  userIduser2: User;
}
