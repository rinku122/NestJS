import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class UpdateDtoStatus {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
