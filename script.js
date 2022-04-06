
const messageArray = [ "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.", "Success does not consist in never making mistakes but in never making the same one a second time.", 
"I don't want to get to the end of my life and find that I lived just the length of it. I want to have livedthe width of it as well.", "You must expect great things of yourself before you can do them.", "Motivation is what gets you started. Habit is what keeps you going.", 
"People rarely succeed unless they have fun in what they are doing.", "There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.", "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.", 
"You've got to get up every morning with determination if you're going to go to bed with satisfaction.", "To be successful you must accept all challenges that come your way. You can't just accept the ones you like.", "Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.", 
"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.", "To accomplish great things, we must not only act, but also dream, not only plan, but also believe.", "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no help at all.", 
"You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.", "Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.", "It is better to fail in originality than to succeed in imitation.", "Fortune sides with him who dares.", 
"Little minds are tamed and subdued by misfortune; but great minds rise above it.", "Failure is the condiment that gives success its flavor.", "Don't let what you cannot do interfere with what you can do.", "You may have to fight a battle more than once to win it.", 
"A man can be as great as he wants to be. If you believe in yourself and have the courage, the determination, the dedication, the competitive drive and if you are willing to sacrifice the little things in life and pay the price for the things that are worthwhile, it can be done.","If you genuinely want something, don't wait for it--teach yourself to be impatient.", 
"Don't let the fear of losing be greater than the excitement of winning.", "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!", 
"You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.", 
"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier, wish you were better.", "The number one reason people fail in life is because they listen to their friends, family, and neighbors."];

class messagefinder {
    constructor() {
        this.arrayMessages = messageArray;
        this.score = 0;
    }
    get total() {
        return this.arrayMessages;
    }
    get score() {
        return this.score;
    }
    score(num) {
        this.score = num;
    }
    randomMessage() {
        let randomindex = Math.floor(Math.random()*this.arrayMessages.length);
        return this.arrayMessages[randomindex];
    }
}

const getScoreFunction = classInput => {
    return classInput.score();
}

function randomforhtml () {
    const bodyindex = document.getElementById('h3');
    bodyindex.innerHTML = deneme;
}

const randomButton = document.getElementById('randomise');





const deneme1 = new messagefinder;

// console.log(deneme1.total);
console.log('----------------------------------------');

const deneme = deneme1.randomMessage();
console.log(deneme);
//console.log(messageArray[2]);
// console.log(messageArray[2][5]);

const bodyindex = document.getElementById('h2');
bodyindex.innerHTML = deneme;


console.log(deneme1.score);
deneme1.score = 10;
console.log(deneme1.score);
deneme1.score = 150;

console.log(deneme1.score);

randomButton.onclick = function() {
    let oneMoreRandom = deneme1.randomMessage();
    document.getElementById('h2').innerHTML = oneMoreRandom;
}