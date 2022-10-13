import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class entityAvaliacao {
  @PrimaryGeneratedColumn()
  av_codigo: number;

  @Column()
  av_dataavaliacao: Date;

  @Column()
  av_satisfacao: number;

  @Column()
  av_comentario: string;

}