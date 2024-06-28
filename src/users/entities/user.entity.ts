import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';
import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { IndividualProfile } from 'profiles/entities/profiles.entity';
import {
  Organization,
  OrganizationUser,
} from 'organizations/entities/organization.entity';

@Entity()
export class User extends UuidTimestampEntity {
  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  oauth_provider: string;

  @Column({ nullable: true })
  oauth_provider_id: string;

  @Column({ unique: true, nullable: true })
  ethereum_address: string;

  @Column({ nullable: true })
  agreed_terms_and_conditions: boolean;

  @Column({ nullable: true })
  agreed_privacy_policy: boolean;

  @OneToMany(
    () => IndividualProfile,
    (individualProfile) => individualProfile.user,
    {
      nullable: true,
      cascade: true,
    },
  )
  individual_profiles: IndividualProfile[];

  @ManyToMany(() => Organization, (organization) => organization.users, {
    nullable: true,
  })
  @JoinTable({
    name: 'organization_users', // Table name for the join table
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'organization_id',
      referencedColumnName: 'id',
    },
  })
  organizations: Organization[];

  @OneToMany(() => OrganizationUser, (orgUser) => orgUser.user, {
    nullable: true,
  })
  organizationUsers: OrganizationUser[];
}
