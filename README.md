# Kafka Superheroes

This project was intended to be a quick toe dip into communicating between different node applications via Kafka. There are three folders:

- `/kafka` - This is a docker-compose configuration for running Kafka and Zookeeper ['borrowed' from this blog post](https://www.baeldung.com/ops/kafka-docker-setup)
- `/consumers` - This is a collection of three Kafka consumers configured using KafkaJS, there are three different applications as I wanted to trial three consumers running completely separately
- `/producers` - A collection of two producers for pushing to two topic

Running the apps

First start the kafka instance and leave it running:
```
cd kafka
docker-compose up -d
```

Start your consumers - for each one perform the below and let it run
```
# Navigate to the consumer
cd consumers/superheroes
npm start
```

Post messages to the topic
```
# Navigate to the producer
cd producers/marvel
npm start
```

You will see messages produced pop up in the terminals of the consumers