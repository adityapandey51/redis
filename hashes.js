import client from "./client";

async function init() {

const fieldsAdded = await client.hSet(
    'bike:1',
    {
        model: 'Deimos',
        brand: 'Ergonom',
        type: 'Enduro bikes',
        price: 4972,
    },
)
console.log(`Number of fields were added: ${fieldsAdded}`);

const model = await client.hGet('bike:1', 'model');
console.log(`Model: ${model}`);

const price = await client.hGet('bike:1', 'price');
console.log(`Price: ${price}`);

const bike = await client.hGetAll('bike:1');
console.log(bike);

const fields = await client.hmGet('bike:1', ['model', 'price']);
console.log(fields);

let newPrice = await client.hIncrBy('bike:1', 'price', 100);
console.log(newPrice);
newPrice = await client.hIncrBy('bike:1', 'price', -100);
console.log(newPrice);

let rides = await client.hIncrBy('bike:1:stats', 'rides', 1);
console.log(rides);

rides = await client.hIncrBy('bike:1:stats', 'rides', 1);
console.log(rides);

rides = await client.hIncrBy('bike:1:stats', 'rides', 1);
console.log(rides);

let crashes = await client.hIncrBy('bike:1:stats', 'crashes', 1);
console.log(crashes);

let owners = await client.hIncrBy('bike:1:stats', 'owners', 1);

rides = await client.hGet('bike:1:stats', 'rides');
console.log(`Total rides: ${rides}`);
const stats = await client.hmGet('bike:1:stats', ['crashes', 'owners']);
console.log(`Bike stats: crashes=${stats[0]}, owners=${stats[1]}`);

  }