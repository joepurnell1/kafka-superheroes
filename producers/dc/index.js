const { Kafka } = require('kafkajs')

async function run() {
    const kafka = new Kafka({
        clientId: 'dc-producer',
        brokers: ['localhost:29092']
    })

    const topic = 'dc'
    
    const producer = kafka.producer()

    await producer.connect()
    
    await producer.send({
        topic,
        messages: [
            { key: 'batman', value: 'bruce wayne' },
        ],
    })

    process.exit(0);
}

run();