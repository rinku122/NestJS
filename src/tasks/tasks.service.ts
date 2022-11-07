import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/auth/users.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterDto } from './dto/get-task-filter.dgto';
import { UpdateDtoStatus } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  getAlltasks(filterDTO: FilterDto, user: User): Promise<Task[]> {
    return this.taskRepository.getAlltasks(filterDTO, user);
  }

  async getTaskById(id: string, user: User): Promise<Task> {
    const found = await this.taskRepository.findOneBy({ id, user });

    if (!found) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    return found;
  }

  createTask(createDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createDto, user);
  }

  async deleteATask(id: string, user: User): Promise<void> {
    const deleted = await this.taskRepository.delete({ id, user });

    if (deleted.affected === 0) {
      throw new NotFoundException(`task not found with id ${id}`);
    }
  }

  async updateATask(
    id: string,
    updateDtostatus: UpdateDtoStatus,
    user: User,
  ): Promise<Task> {
    const found = await this.getTaskById(id, user);

    const { status } = updateDtostatus;
    found.status = status;

    await this.taskRepository.save(found);
    return found;
  }
}
