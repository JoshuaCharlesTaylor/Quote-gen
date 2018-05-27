var quotes = ["Another one - DJ Khaled", 
                "Just do it - Nike", 
                "Don't believe everything on the internet - unknown",
                "Got Dis Quote Again - Website",
                "Hello? - Website",
                "Aaahhhh! - You",
                "Houston we have a problem - Apollo 13",
                "We meet again - Hacker",
                "Lies I tell you! All of them are LIES! - Abraham Lincoln",
                "Let me out - Your Soul",
                "Ashen One - Fire Kepper",
                "This is the longest quote on this website, literally - Website",
                " - Brain"  
            ]

function newQuote() {
    var randNum = Math.floor(Math.random() * (quotes.length));
    console.log(quotes[randNum]);
    document.getElementById("quoteDisplay").innerHTML = quotes[randNum];
}

