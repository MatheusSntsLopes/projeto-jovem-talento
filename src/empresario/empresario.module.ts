import { Module } from '@nestjs/common';
import { EmpresarioService } from './empresario.service';
import { EmpresarioController } from './empresario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Empresario } from './entities/empresario.entity';

@Module({
  controllers: [EmpresarioController],
  providers: [EmpresarioService],
})
export class EmpresarioModule {}