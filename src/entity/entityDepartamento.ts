import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class entityDepartamento {
  @PrimaryGeneratedColumn()
  dp_codigo: number;

  @Column()
  dp_departamento: string;

  @Column()
  dp_observacao: string;

}