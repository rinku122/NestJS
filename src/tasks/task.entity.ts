import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './tasks.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  title: string;

  @Column()
  status: TaskStatus;
}
