import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { InviteToEvent } from './inviteFromEvent.entity';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'datetime',
  })
  created_at: Date;

  @Column({ type: 'varchar', length: 400 })
  public title: string;

  @Column({ type: 'datetime' })
  public date: Date;

  @Column({ type: 'varchar', length: 255 })
  public location: string;

  @Column({ type: 'varchar', length: 255 })
  public tema: string;

  @Column({ type: 'varchar', length: 200 })
  public region: string;

  @Column({ type: 'varchar', length: 500 })
  public description: string;

  @OneToMany(() => InviteToEvent, (inviteToEvent) => inviteToEvent.event)
  invites: InviteToEvent[];
}
