import { Injectable, NotFoundException } from '@nestjs/common';
import { Tasks, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterDto } from './dto/get-task-filter.dgto';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  getAllTasks(): Tasks[] {
    return this.tasks;
  }

  getAllFilteredTasks(filterDTO: FilterDto): Tasks[] {
    const { search, status } = filterDTO;
    let tasks = this.getAllTasks();
    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Tasks {
    const { title, description } = createTaskDto;
    const task: Tasks = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }

  getATask(id: string): Tasks {
    const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task not found with ${id}`);
    }
    return found;
  }

  updateATask(id: string, status: TaskStatus): Tasks {
    const task = this.getATask(id);
    task.status = status;
    return task;
  }

  deleteATask(id: string): void {
    const found = this.getATask(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }
}
