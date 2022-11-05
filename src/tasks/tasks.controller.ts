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
import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: FilterDto): Tasks[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getAllFilteredTasks(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Get('/:id')
  // getATask(@Param('id') id: string): Tasks {
  //   return this.tasksService.getATask(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Tasks {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Patch('/:id/status')
  // updateATask(
  //   @Param('id') id: string,
  //   @Body() updateDtostatus: UpdateDtoStatus,
  // ): Tasks {
  //   const { status } = updateDtostatus;
  //   return this.tasksService.updateATask(id, status);
  // }

  // @Delete('/:id')
  // deleteATask(@Param('id') id: string): void {
  //   return this.tasksService.deleteATask(id);
  // }
}
