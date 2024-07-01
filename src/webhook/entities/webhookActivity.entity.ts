import { Entity, Column, ManyToOne } from 'typeorm';
import { Webhook } from './webhook.entity';
import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';

@Entity()
export class WebhookActivity extends UuidTimestampEntity {
  @ManyToOne(() => Webhook, (webhook) => webhook.webhook_activities, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  webhook: Webhook;

  @Column({ type: 'varchar', nullable: true })
  latest_interaction_type: string; // SUCCESS, FAIL

  @Column({ type: 'varchar', nullable: true })
  delivery_response_body: string;

  @Column({ type: 'varchar', nullable: true })
  delivery_response_status_code: string;

  @Column({ type: 'text', nullable: true })
  error_log: string;

  @Column({ type: 'bigint', nullable: true })
  request_timestamp_in_unix_ms: number;

  @Column({ type: 'varchar', length: 512, nullable: true })
  request_once: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  request_signature: string;

  @Column({ type: 'jsonb', nullable: true })
  request_payload: object;
}
