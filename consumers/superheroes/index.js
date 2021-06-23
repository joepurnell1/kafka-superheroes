const { Kafka } = require('kafkajs')

async function run() {
    const kafka = new Kafka({
        clientId: 'superhero-consumer',
        brokers: ['localhost:29092']
    })
    
    const consumer = kafka.consumer({ groupId: 'superhero-consumers' })
    
    await consumer.connect()
    
    await consumer.subscribe({ topic: 'marvel' })

    await consumer.subscribe({ topic: 'dc' })
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log('superhero-consumer', {
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