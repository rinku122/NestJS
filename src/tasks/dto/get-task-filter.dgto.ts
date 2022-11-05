import { IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class FilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  search: string;
}
