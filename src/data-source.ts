import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './users/users.model';
import { Product } from './products/products.model';

const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = process.env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: +POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [User, Product],
  migrations: ['src/migration/*.ts'],
  subscribers: [],
});
