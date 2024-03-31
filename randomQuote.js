let quotes=[
"You don\’t gain confidence from shouting affirmations in the mirror, but by having a stack of undeniable proof that you are exactly who you say you are - Alex Hormozi",
"Outwork your self doubt - Chris Williamson",
"Compare yourself to who you were yesterday, not to who someone else is today - Jordan B Peterson",
"If somethings easy, leave it for somebody else - Tom Platz"
];

let quoteRand=()=>{
    return quotes[Math.floor(quotes.length*Math.random())];
}

console.log(quoteRand());