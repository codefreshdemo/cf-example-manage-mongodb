FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongodb --db exampleDb --collection Contacts --type json --file /init.json --jsonArray