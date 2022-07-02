let anyAnswer = ['It is certain.',  
'Without a doubt.',
'Yes definitely.',
'You may rely on it.',
'Outlook good.',
'Reply hazy, try again.',
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
"Don't count on it.",
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Very doubtful.'];

let ids = document.getElementById('text-sub')


function generateAnswer(){
    var rand = Math.floor(Math.random() * anyAnswer.length);
    var val = anyAnswer[rand];

    return val;
}

ids.addEventListener('click', function(){
    let message = generateAnswer();
    document.querySelector('.answer').innerHTML = message;
  
});
