const { Kafka } = require('kafkajs')

async function run() {
    const kafka = new Kafka({
        clientId: 'marvel-consumer',
        brokers: ['localhost:29092']
    })
    
    const consumer = kafka.consumer({ groupId: 'marvel-consumers' })
    
    await consumer.connect()
    
    await consumer.subscribe({ topic: 'marvel' })
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log('marvel-consumer', {
                topic,
                partition,
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
    })
};

run();