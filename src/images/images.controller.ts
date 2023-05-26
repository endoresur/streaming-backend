import { Controller } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('images')
@ApiTags('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}
}
