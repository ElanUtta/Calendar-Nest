import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Event } from './event.entity';

@Entity('inviteToEvent')
export class InviteToEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  public email: string;

  @Column({ type: 'boolean' })
  public is_accepted: boolean;

  @CreateDateColumn({
    type: 'datetime',
  })
  created_at: Date;

  @ManyToOne(() => Event, (event) => event.invites)
  event: Event;
}
