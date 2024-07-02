import { Apikey } from 'apikeys/entities/apikey.entity';
import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

enum PaymentStatus {
  INITIATED = 'INITIATED',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

@Entity()
export class Payment extends UuidTimestampEntity {
  @ManyToOne(() => Apikey, (apikey) => apikey.payments, { onDelete: 'CASCADE' })
  apikey: Apikey;

  @Column({ nullable: true, type: 'varchar', length: 512 })
  reference_id: string; // Unique reference id - same as user_order_id

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  address_from: string;

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  address_to: string; // recipient address

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  coin_name: string; // Coin/Currency

  @Column({ type: 'float' })
  order_amount: number;

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  coin_type: string; // Coin Type - specific to aptos

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  label: string;

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  message: string;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.INITIATED,
  })
  payment_status: PaymentStatus;

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  transaction_hash: string;
}
