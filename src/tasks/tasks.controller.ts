import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterDto } from './dto/get-task-filter.dgto';
import { UpdateDtoStatus } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAlltasks(@Query() filterDto: FilterDto): Promise<Task[]> {
    return this.tasksService.getAlltasks(filterDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteATask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteATask(id);
  }

  @Patch('/:id/status')
  updateATask(
    @Param('id') id: string,
    @Body() updateDtostatus: UpdateDtoStatus,
  ): Promise<Task> {
    return this.tasksService.updateATask(id, updateDtostatus);
  }
}
