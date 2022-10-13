import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class entityFabricante {
  @PrimaryGeneratedColumn()
  fb_codigo: number;

  @Column()
  fb_fabricante: string;

  @Column()
  fb_telefone: string;

  @Column()
  fb_email: string;

  @Column()
  fb_logradouro: string;

  @Column()
  fb_bairro: string;

  @Column()
  fb_cidade: string;

  @Column()
  fb_estado: string;

  @Column()
  fb_contato: string;

  @Column()
  fb_observacao: string;

}
