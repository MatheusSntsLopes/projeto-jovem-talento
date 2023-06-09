import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { Vaga } from 'src/vaga/entities/vaga.entity';
import { Tipo } from '../constants/Tipo';

@Table({ tableName: 'Empresario' })
export class Empresario extends Model<Empresario> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  cnpj: string;

  @Column({ type: DataType.DATE, allowNull: true })
  data_nascimento?: Date;

  @Column({
    type: DataType.ENUM,
    allowNull: true,
    values: Object.values(Tipo),
    defaultValue: Tipo.EMPRESARIO,
  })
  tipo: Tipo;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  telefone: string;

  @Column({ type: DataType.STRING, allowNull: false })
  estado: string;

  @Column({ type: DataType.STRING, allowNull: false })
  cidade: string;

  @Column({ type: DataType.STRING, allowNull: false })
  bairro: string;

  @Column({ type: DataType.STRING, allowNull: false })
  rua: string;

  @Column({ type: DataType.STRING, allowNull: false })
  numero: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  cep: number;

  @HasMany((): typeof Vaga => Vaga)
  vaga: Vaga;
}
