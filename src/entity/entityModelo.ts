import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class entityModelo {
  @PrimaryGeneratedColumn()
  md_codigo: number;

  @Column()
  md_modelo: string;

  @Column()
  md_categoria: string;

  @Column()
  md_observacao: string;


}
