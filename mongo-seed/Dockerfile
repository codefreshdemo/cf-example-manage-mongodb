FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongodb --db exampleDb --type json --file /init.json --jsonArray