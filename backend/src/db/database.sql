create database redbus;

create table "buses"(
  "id" serial not null primary key,
  "name" varchar(225) not null,
  "origin" varchar(255) not null,
  "destination" varchar(255) not null,
  "schedule_date" timestamp not null,
  "price" float not null,
  "created_at" timestamp default current_timestamp
);

create table "orders" (
  "id" serial not null primary key,
  "bus_id" int,
  "price" float not null,
  "username" varchar(255) not null,
  "email" varchar(255) not null,
  "created_at" timestamp default current_timestamp,
  constraint "fk_bus" foreign key("bus_id") references buses("id")
);
