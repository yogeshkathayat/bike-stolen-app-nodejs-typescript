import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import  Officer from "./officer.model";



@Table({
  timestamps: true
})
export default class Case extends Model<Case> {


  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @AllowNull(false)
  @Column
  license: string;

  @AllowNull(false)
  @Column
  color: string;

  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(false)
  @Column
  owner: string;

  @AllowNull(false)
  @Column
  dateOfTheft: Date;

  @AllowNull(false)
  @Column
  theftDescription: string;

  @AllowNull(false)
  @Column
  status: string;

  @ForeignKey(() => Officer)
  @Column
  officerId: number;

  @BelongsTo(() => Officer, { constraints: false })
  officer: Officer;

}
