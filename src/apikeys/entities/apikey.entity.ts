import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';
import { Payment } from 'payments/entities/payment.entity';
import { Column, OneToMany } from 'typeorm';

export class Apikey extends UuidTimestampEntity {
  @Column({ nullable: true, type: 'varchar', length: 512 })
  name: string;

  @Column({ nullable: true, unique: true, type: 'varchar', length: 512 })
  key: string;

  @Column({ nullable: true, type: 'varchar', length: 512 })
  secret_key: string;

  @OneToMany(() => Payment, (payment) => payment.apikey, {
    cascade: true,
    nullable: true,
  })
  payments: Payment[];
}
