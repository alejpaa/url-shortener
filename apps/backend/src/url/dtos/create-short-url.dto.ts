import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateShortUrlDto {
  @IsString({ message: 'La URL original debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La URL original no puede estar vacía' })
  @MinLength(1, { message: 'La URL original debe tener al menos 1 carácter' })
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  originalUrl: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  description?: string;
}
