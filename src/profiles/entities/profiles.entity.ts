import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'users/entities/user.entity';
import { Webhook } from 'webhook/entities/webhook.entity';

@Entity('individual_profile')
export class IndividualProfile extends UuidTimestampEntity {
  @Column({ nullable: true, type: 'varchar', length: 512 })
  profile_name: string;

  @Column({ nullable: true, type: 'varchar', length: 512 })
  first_name: string; // Google oauth - given_name

  @Column({ nullable: true, type: 'varchar', length: 512 })
  middle_name: string;

  @Column({ nullable: true, type: 'varchar', length: 512 })
  last_name: string; // Google oauth - family_name

  @Column({ nullable: true, type: 'varchar', length: 128 })
  locale: string; // Google oauth - locale - language preference

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  work_domain: string; // Google oauth - Apps for Work domain

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  profile_image: string;

  // Todo: move this to user and auth with OTP
  @Column({ nullable: true, type: 'varchar', length: 64 })
  isd_code: string;

  @Column({ nullable: true, type: 'varchar', length: 128 })
  phone_number: string;

  @ManyToOne(() => User, (user) => user.individual_profiles, { nullable: true })
  user: User;

  @OneToMany(
    () => UserWalletAddress,
    (wallet_address) => wallet_address.individual_profile,
    {
      nullable: true,
      cascade: true,
    },
  )
  wallet_addresses: UserWalletAddress[];

  @OneToMany(() => Webhook, (webhook) => webhook.individual_profile, {
    nullable: true,
    cascade: true,
  })
  webhooks: Webhook[];
}

@Entity('user_wallet_address')
export class UserWalletAddress extends UuidTimestampEntity {
  @Column({ nullable: true })
  wallet_address: string;

  @ManyToOne(
    () => IndividualProfile,
    (individual_profile) => individual_profile.wallet_addresses,
    { nullable: true },
  )
  individual_profile: IndividualProfile;
}
