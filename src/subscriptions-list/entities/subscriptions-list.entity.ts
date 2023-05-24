import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';

@Entity('subscriptions-lists')
export class SubscriptionsListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity, (listOwner) => listOwner.subscriptionsList)
  listOwner: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.subscriptions)
  subscriptions: UserEntity[];
}
