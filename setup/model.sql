create table products (
	product_id serial not null primary key,
	name varchar(64) not null,
	price decimal(16, 2) not null
);
