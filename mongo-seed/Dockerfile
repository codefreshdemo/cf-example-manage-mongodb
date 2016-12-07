FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongodb --db exampleDb --collection Contact --type json --file /init.json --jsonArray