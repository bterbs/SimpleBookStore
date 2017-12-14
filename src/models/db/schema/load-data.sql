\copy books (title, author, genre, height, publisher) FROM './src/models/db/schema/bookData.csv' WITH DELIMITER ',' CSV HEADER
