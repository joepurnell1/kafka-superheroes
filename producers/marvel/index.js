const { Kafka } = require('kafkajs')

async function run() {
    const kafka = new Kafka({
        clientId: 'marvel-producer',
        brokers: ['localhost:29092']
    })

    const topic = 'marvel'
    
    const producer = kafka.producer()

    await producer.connect()
    
    await producer.send({
        topic,
        messages: [
            { key: 'iron-man', value: 'tony stark' },
            { key: 'ms-marvel', value: 'carol danvers' },
        ],
    })

    process.exit(0);
}

run();