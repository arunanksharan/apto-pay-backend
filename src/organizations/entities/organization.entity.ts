import { UuidTimestampEntity } from 'common/entities/uuidTimestamp.entity';
import { Entity, Column, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'users/entities/user.entity';

@Entity()
export class Organization extends UuidTimestampEntity {
  @Column({ nullable: true, type: 'varchar', length: 512 })
  name: string;

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  website: string;

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  profile_image: string;

  // Todo: move this to user and auth with OTP
  @Column({ nullable: true, type: 'varchar', length: 64 })
  isd_code: string;

  @Column({ nullable: true, type: 'varchar', length: 128 })
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
