import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class UpdateDtoStatus {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
