import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class entityEquipamento {
  @PrimaryGeneratedColumn()
  eq_codigo: number;

  @Column()
  eq_equipamento: string;

  @Column()
  eq_patrimonio: string;

  @Column()
  eq_datafabricacao: string;

  @Column()
  eq_status: number;


}