#!/usr/bin/env bash

sleep 30
mongoimport --host mongodb --db exampleDb --collection contacts --type json --file /init.json --jsonArray