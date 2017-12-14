\copy books (title, author, genre, height, publisher) FROM './model/bookData.csv' WITH DELIMITER ',' CSV HEADER
