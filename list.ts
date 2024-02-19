import client from "./client";

async function init(){

const res1 = await client.lPush('bikes:repairs', 'bike:1');
console.log(res1);  

const res2 = await client.lPush('bikes:repairs', 'bike:2');
console.log(res2);  

const res3 = await client.rPop('bikes:repairs');
console.log(res3);  

const res4 = await client.rPop('bikes:repairs');
console.log(res4);  


const res5 = await client.lPush('bikes:repairs', 'bike:1');
console.log(res5);  

const res6 = await client.lPush('bikes:repairs', 'bike:2');
console.log(res6); 

const res7 = await client.lPop('bikes:repairs');
console.log(res7);  

const res8 = await client.lPop('bikes:repairs');
console.log(res8);  


const res9 = await client.lLen('bikes:repairs');
console.log(res9); 


const res10 = await client.lPush('bikes:repairs', 'bike:1');
console.log(res10);  

const res11 = await client.lPush('bikes:repairs', 'bike:2');
console.log(res11);  

const res12 = await client.lMove('bikes:repairs', 'bikes:finished', 'LEFT', 'LEFT');
console.log(res12); 
const res13 = await client.lRange('bikes:repairs', 0, -1);
console.log(res13);  

const res14 = await client.lRange('bikes:finished', 0, -1);
console.log(res14);  


const res15 = await client.rPush('bikes:repairs', 'bike:1');
console.log(res15);  

const res16 = await client.rPush('bikes:repairs', 'bike:2');
console.log(res16);  

const res17 = await client.lPush('bikes:repairs', 'bike:important_bike');
console.log(res17);  

const res18 = await client.lRange('bikes:repairs', 0, -1);
console.log(res18); 


const res19 = await client.rPush('bikes:repairs', ['bike:1', 'bike:2', 'bike:3']);
console.log(res19);  

const res20 = await client.lPush(
  'bikes:repairs', ['bike:important_bike', 'bike:very_important_bike']
);
console.log(res20);  

const res21 = await client.lRange('bikes:repairs', 0, -1);
console.log(res21); 


const res22 = await client.rPush('bikes:repairs', ['bike:1', 'bike:2', 'bike:3']);
console.log(res22);  

const res23 = await client.rPop('bikes:repairs');
console.log(res23);  

const res24 = await client.lPop('bikes:repairs');
console.log(res24);  

const res25 = await client.rPop('bikes:repairs');
console.log(res25); 

const res26 = await client.rPop('bikes:repairs');
console.log(res26);  


const res27 = await client.lPush(
  'bikes:repairs', ['bike:1', 'bike:2', 'bike:3', 'bike:4', 'bike:5']
);
console.log(res27);  

const res28 = await client.lTrim('bikes:repairs', 0, 2);
console.log(res28); 

const res29 = await client.lRange('bikes:repairs', 0, -1);
console.log(res29); 


const res27eol = await client.rPush(
  'bikes:repairs', ['bike:1', 'bike:2', 'bike:3', 'bike:4', 'bike:5']
);
console.log(res27eol);  

const res28eol = await client.lTrim('bikes:repairs', -3, -1);
console.log(res28eol); 

const res29eol = await client.lRange('bikes:repairs', 0, -1);
console.log(res29eol);  


const res31 = await client.rPush('bikes:repairs', ['bike:1', 'bike:2']);
console.log(res31);  

const res32 = await client.brPop('bikes:repairs', 1);
console.log(res32);  

const res33 = await client.brPop('bikes:repairs', 1);
console.log(res33); 
const res34 = await client.brPop('bikes:repairs', 1);
console.log(res34); 


const res35 = await client.del('new_bikes');
console.log(res35); 

const res36 = await client.lPush('new_bikes', ['bike:1', 'bike:2', 'bike:3']);
console.log(res36); 


const res37 = await client.set('new_bikes', 'bike:1');
console.log(res37);  
const res38 = await client.type('new_bikes');
console.log(res38);  


await client.lPush('bikes:repairs', ['bike:1', 'bike:2', 'bike:3']);
console.log(res36);  

const res40 = await client.exists('bikes:repairs')
console.log(res40);  

const res41 = await client.lPop('bikes:repairs');
console.log(res41); 

const res42 = await client.lPop('bikes:repairs');
console.log(res42);  

const res43 = await client.lPop('bikes:repairs');
console.log(res43);  

const res44 = await client.exists('bikes:repairs');
console.log(res44);  


const res45 = await client.del('bikes:repairs');
console.log(res45);  

const res46 = await client.lLen('bikes:repairs');
console.log(res46);  
const res47 = await client.lPop('bikes:repairs');
console.log(res47); 


const res48 = await client.lPush(
  'bikes:repairs', ['bike:1', 'bike:2', 'bike:3', 'bike:4', 'bike:5']
);
console.log(res48); 

const res49 = await client.lTrim('bikes:repairs', 0, 2);
console.log(res49); 

const res50 = await client.lRange('bikes:repairs', 0, -1);
console.log(res50);  


}

init()