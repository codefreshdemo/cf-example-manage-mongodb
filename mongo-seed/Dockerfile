FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongodb --db exampleDb --collection contacts --type json --file /init.json --jsonArray