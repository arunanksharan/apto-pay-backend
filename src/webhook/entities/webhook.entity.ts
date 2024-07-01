import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';
import { IndividualProfile } from 'profiles/entities/profiles.entity';
import { WebhookActivity } from './webhookActivity.entity';

enum WebhookStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity()
export class Webhook extends UuidTimestampEntity {
  @ManyToOne(
    () => IndividualProfile,
    (individual_profile) => individual_profile.webhooks,
    {
      nullable: true,
      cascade: true,
    },
  )
  individual_profile: IndividualProfile;

  @Column({ nullable: true })
  url: string;

  @Column({ type: 'enum', enum: WebhookStatus, nullable: true })
  status: WebhookStatus; // ACTIVE, INACTIVE - change to enum

  @Column({ nullable: true })
  secret_key: string;

  @Column({ nullable: true })
  event_type: string; // PAYMENT_SUCCESS, REFUND, CHARGEBACK - change to enum

  @Column({ type: 'int', default: 2 })
  retry_count: number;

  @Column({ type: 'jsonb', nullable: true })
  payload_format: object;

  @Column({ type: 'jsonb', nullable: true })
  delivery_response_format: object;

  @Column({ type: 'varchar', length: 32, nullable: true })
  version: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata: object; // IP Whitelisting

  @OneToMany(
    () => WebhookActivity,
    (webhookActivity) => webhookActivity.webhook,
    { nullable: true, cascade: true },
  )
  webhook_activities: WebhookActivity[];
}
