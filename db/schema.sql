DROP TABLE IF EXISTS newsletters CASCADE;
DROP TABLE IF EXISTS colors CASCADE;
DROP TABLE IF EXISTS article_types CASCADE;
DROP TABLE IF EXISTS articles CASCADE;


CREATE TABLE newsletters (
	newsletter_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR NOT NULL,
	month VARCHAR NOT NULL,
	day INT NOT NULL,
	year INT NOT NULL,
	litmus_code TEXT NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT now()
);


CREATE TABLE colors (
	color_id SERIAL PRIMARY KEY NOT NULL,
	color_name VARCHAR NOT NULL,
	hex_code VARCHAR NOT NULL
);


CREATE TABLE article_types (
	article_type_id SERIAL PRIMARY KEY NOT NULL,
	article_type_name VARCHAR NOT NULL
);


CREATE TABLE articles (
	article_id SERIAL PRIMARY KEY NOT NULL,
	article_type INT REFERENCES article_types(article_type_id),
	title VARCHAR(2000) NOT NULL,
	description VARCHAR(2000) NOT NULL,
	article_url VARCHAR(2000),
	icon_url VARCHAR(2000),
	category_tag VARCHAR,
	newsletter_id INT REFERENCES newsletters(newsletter_id),
	color_id INT REFERENCES colors(color_id),
	cta VARCHAR(2000),
	event_date VARCHAR(2000),
	event_time VARCHAR(2000),
	position INT NOT NULL
);