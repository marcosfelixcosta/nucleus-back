import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


   @Entity()
export class entityChamados {
  @PrimaryGeneratedColumn()
  ch_codigo: number;

  @CreateDateColumn()
  ch_dataabertura: Date;

  @Column({ default: null })
  ch_prioridade: string;

  @Column({ default: null })
  ch_descricao: string;

  @Column({ default: null })
  ch_categoria: string;

  @Column({ default: null })
  ch_assunto: string;

  @Column({ default: null })
  ch_tipo: number;

  @Column({default:false})
  ch_status: boolean;

  @Column({default: null })
  ch_resolver: string;


}
