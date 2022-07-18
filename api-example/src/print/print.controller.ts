import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrintService } from './print.service';
import { CreatePrintDto } from './dto/create-print.dto';
import { UpdatePrintDto } from './dto/update-print.dto';

@Controller()
export class PrintController {
  constructor(private readonly printService: PrintService) {}

  @MessagePattern('createPrint')
  create(@Payload() createPrintDto: CreatePrintDto) {
    return this.printService.create(createPrintDto);
  }

  @MessagePattern('findAllPrint')
  findAll() {
    return this.printService.findAll();
  }

  @MessagePattern('findOnePrint')
  findOne(@Payload() id: number) {
    return this.printService.findOne(id);
  }

  @MessagePattern('updatePrint')
  update(@Payload() updatePrintDto: UpdatePrintDto) {
    return this.printService.update(updatePrintDto.id, updatePrintDto);
  }

  @MessagePattern('removePrint')
  remove(@Payload() id: number) {
    return this.printService.remove(id);
  }
}
