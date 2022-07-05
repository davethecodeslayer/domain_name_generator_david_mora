let pronoun = ['the','our'];
let adj = ['amazing', 'incredible'];
let noun = ['jogger','racoon'];
let dot = ['wow', 'kpow'];

function domainName () {
    let sentence = [];

    for (i= 0; i < pronoun.length; i++) {
        for (j = 0; j < adj.length; j++) {
            for (k = 0; k < noun.length; k++) {
                for (l = 0; l < dot.length; l++) {
                    sentence.push(pronoun[i]+adj[j]+noun[k]+'.'+dot[l])
                }
            }
        }
    }
    return sentence;
}

console.log(domainName());