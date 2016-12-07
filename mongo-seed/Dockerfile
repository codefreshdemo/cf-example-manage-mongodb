FROM mongo:3.2.11

COPY init.json /init.json

#ADD start.sh /start.sh
#RUN chmod +x /start.sh

CMD mongoimport --host mongodb --db exampleDb --collection contacts --type json --file /init.json --jsonArray