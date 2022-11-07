import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterDto } from './dto/get-task-filter.dgto';
import { UpdateDtoStatus } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-User.decorator';
import { User } from 'src/auth/users.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAlltasks(
    @Query() filterDto: FilterDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
    return this.tasksService.getAlltasks(filterDto, user);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string, @GetUser() user: User): Promise<Task> {
    return this.tasksService.getTaskById(id, user);
  }

  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDto, user);
  }

  @Delete('/:id')
  deleteATask(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.tasksService.deleteATask(id, user);
  }

  @Patch('/:id/status')
  updateATask(
    @Param('id') id: string,
    @Body() updateDtostatus: UpdateDtoStatus,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.updateATask(id, updateDtostatus, user);
  }
}
