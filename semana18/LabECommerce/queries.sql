-- Queries executadas pelo workbench
create table `user`(
	id varchar(50) not null primary key,
    name varchar(50) not null,
    email varchar(50) not null,
    age int not null
);

create table product(
	id varchar(50) not null primary key,
    name varchar(50) not null,
    description varchar(100) not null,
    price decimal(6,4) not null
);

create table ticket(
	id varchar(50) not null primary key,
    name varchar(50) not null,
    description varchar(100) not null,
    price decimal(6,4) not null,
    origin_place varchar(50) not null,
    destination_place varchar(50) not null
);

create table purchase(
	id varchar(50) not null primary key,
    qtt_items int not null,
    total_value decimal(7,2) not null,
    id_user varchar(50),
    id_product varchar(50),
    foreign key(id_user) references `user`(id),
    foreign key(id_product) references product(id)
);