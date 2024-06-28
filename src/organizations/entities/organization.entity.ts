import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';
import { Entity, Column, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'users/entities/user.entity';

@Entity()
export class Organization extends UuidTimestampEntity {
  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  profile_image: string;

  // Todo: move this to user and auth with OTP
  @Column()
  isd_code: string;

  @Column()
  phone_number: string;

  @ManyToMany(() => User, (user) => user.organizations)
  users: User[];

  @OneToMany(() => OrganizationUser, (orgUser) => orgUser.organization)
  organizationUsers: OrganizationUser[];
}

@Entity('organization_users')
export class OrganizationUser extends UuidTimestampEntity {
  @ManyToOne(() => User, (user) => user.organizationUsers)
  user: User;

  @ManyToOne(
    () => Organization,
    (organization) => organization.organizationUsers,
  )
  organization: Organization;

  @Column()
  role: string; // Role of the user in the organization (e.g., Admin, Member)
}
