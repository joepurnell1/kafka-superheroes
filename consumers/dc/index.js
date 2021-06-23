const { Kafka } = require('kafkajs')

async function run() {
    const kafka = new Kafka({
        clientId: 'dc-consumer',
        brokers: ['localhost:29092']
    })
    
    const consumer = kafka.consumer({ groupId: 'dc-consumers' })
    
    await consumer.connect()
    
    await consumer.subscribe({ topic: 'dc' })
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log('dc-consumer', {
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