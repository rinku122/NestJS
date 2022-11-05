import { IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class FilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  search: string;
}
