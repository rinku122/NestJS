import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterDto } from './dto/get-task-filter.dgto';
import { UpdateDtoStatus } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  getAlltasks(filterDTO: FilterDto): Promise<Task[]> {
    return this.taskRepository.getAlltasks(filterDTO);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    return found;
  }

  createTask(createDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createDto);
  }

  async deleteATask(id: string): Promise<void> {
    const deleted = await this.taskRepository.delete(id);

    if (deleted.affected === 0) {
      throw new NotFoundException(`task not found with id ${id}`);
    }
  }

  async updateATask(
    id: string,
    updateDtostatus: UpdateDtoStatus,
  ): Promise<Task> {
    const found = await this.getTaskById(id);

    const { status } = updateDtostatus;
    found.status = status;

    await this.taskRepository.save(found);
    return found;
  }
}
