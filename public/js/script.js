// MARKOV CHAIN BY WORDS

var hardcodedTweetArray = [
  'Next act: mercenaries quest to retrieve an artifact from the Warped Lands, spies root out insurrection, &amp; Netherhence chases a fugitive',
  '&amp; the "mercenaries deactivate city\'s ancient haywire defenses, deal with bitter nonhuman Robin Hood, &amp; run away from Imperial Executor" arc',
  'This after the "spies chase potent artifact stolen by cult creating demon-powered automata &amp; end up storm-wracked, bleeding at sea" arc',
  'I\'m hype',
  'The Sabriel-meets-FMA (via a beetle-species under siege by human zealots) arc of the DW campaign I\'m running is a close to its climax AND',
  'Have you read the Waypoint article on similarities between PUBG and horror?',
  'Uhhh I think you mean "jorts"',
  'Same, except "half-"',
  'I just wish I had screencapped the original source to give them credit, is all 😑',
  '(TAZ fandom brouhaha, if it weren\'t clear)',
  'I\'ve been absorbing takes so far mostly rather than trying to talk on this subject and as often merritt has the Goo…',
  'I saved this from twitter a while back and it\'s not about who\'s "best" but who\'s best at /which rol…',
  'I scope that  trying not to say "the President" there at the end...',
  'Idk dude',
  'Oh shit whaddup!',
  'Pwiise Wiitwiit',
  'I really like how much those factors--plus the best aggro cards are legendaries--slows down aggro and…',
  'I\'ve been having a lot of fun with that this past month. The lanes and runes really make for a good back and forth!',
  'Kentucky Route Zero.',
  'It\'s the sort of thing that could fly under the radar, but do you want to dignify our infant-in-ch…',
  'Aaarg if I weren\'t at work',
  'I\'m Grond-ing my teeth',
  'But aside from his personality,',
  'So who says it the third time?',
  'Ah yes, before the evil unions interfered',
  'To the tune of "God\'s Away on Business"',
  'She can see her house from there',
  'Just tried. 15 character cap on usernames; it\'s a 16 character one. ;.;',
  'In a similar vein, the work of Kali Ciesemier...',
  'RIGHT?',
  'Sara Kipin!',
  'Thank you for framing and reposting this for us',
  'Also when you light a poot on fire',
  'Hollow, disingenuous bad-faith echoes; unreflective, aggrieved cognitive dissonance; and a callously se…',
  'The Traitor Baru Cormorant…tries but it\'s about infiltrating a homophobic empire to destroy from within, e…',
  'NK Jemisin\'s Hundred Thousand Kingdoms is my strongest rec! About gods who are a mmf poly trio',
  'Kameron Hurley does books with really graphic violence &amp; loss but much of the cast of the Worldbreaker ser…',
  'I know in Tamora Pierce\'s YA Circle of Magic series one of the 4 MCs comes out in like... book 5 or so, bu…',
  'Please, don\'t get overconfident. That\'s how we didn\'t end up with President Hillary...',
  'I feel like this breaks the leaked nintendo poke-bible from a while back about how "pokemon never die, they only faint"',
  'wen u just... Know that devil',
  'The. Bad. Takes.',
  'I had the same dilemma until I caved, found my creaky old computer could run it at about 4 fps, and refunded it',
  'Accurate to source material: "how do we make women w/ influence accept their reduced position? We ma…',
  'I stg if Republican Rock beats Democrat Zuck in 2020 it\'ll be the most frustratingly predictable thing to continue enabling Repub cruelty',
  'I loved all the people saying "teamwork :))" and all the responses like "UH, NO, PATRIARCHY"',
  'Ah yes the [CHIP BUTTY]',
  'Technically he said "sure" then never revoked that permission',
  'Out of curiosity, then--what does grab you in a pitch?',
  '"Sea of Rust" looks the most evocative to me (and I\'ve seen Cargill around twitter)',
  'So I\'m catching up on #CarBoys for the finale and, uh,  think Ep 35 is the birth of the TAZ Hunger, honestly??',
  'careful, this seems rather more labor-intensive than "1 like = 1 tip about making games"--I hope it doesn\'t blow up the same way',
  '"well me, I\'m just drinking gin and vermouth, garnished with an olive."',
  'Monthly cat pics on her patreon. Window dressing to the other stuff, but memorable!',
  '(But like, pug pics)',
  'Write short stories for backers, like Kameron Hurley (then resell)? Commission a page of comic per…',
  'I fight this by making sure most of my notebooks are just cheap spiral-bound ones so a) low "risk" to r…',
  'how long until a desperate trump, remembering the media praise for tomahawks and MOAB, tries to nuke north korea or some stupid BS',
  'the rate of exponentially larger political news every single day for the past week scares me, honestly.',
  'Bottom\nThat\nTEEEEEEEXT',
  'ding dong the sexual-harasser-patriarch-who-orchestrated-the-poisoning-of-the-minds-of-millions-with-anti-reality is dead!',
  'For half a minute I thought that all these "happy he\'s dead" tweets were about Chris Cornell but then I saw the OTHER big death of the night',
  'I didn\'t see it as an user-investment gauge, but that certainly seems like a useful and innocuous tool to have implemented!',
  'I\'ve gotta say, including "shitpost option" in all your polls really tempts me to weigh in on a lot more…',
  'Cause yr... *waits* ... puttin yr cards all out on the table?\n\n(Uh, honestly? Raven-&gt;Leliana-&gt;discard)',
  'Discard (hand attack and madness/hellbent)',
  'what are video... games?',
  '*chanting under breath* your friend your pal your dungeon master your personal chef your',
  'It\'s about trying to avoid other people while being forced to interact stressfully with them. so: like real life',
  'pleeeeeeeease',
  'Now to… cool off from being punch-drunk on ideajuice, get a second set of eyes on it, and edit once I\'ve…',
  'Writing up my first  pitch like 💪💪\n\nI\'ve been searching for something to pitch, but today an idea outright stormed into my brain',
  'basic. reading. comprehension.',
  'reminds me of tweeting at a GGer in 2014 &amp; they took offense at me using the word "engenders"--"what doe…',
  'that was yesterday, even.',
  'Yeah, uh, Cassandra from DA:I definitely... hit a certain sweet spot for me',
  'It feels like a sanded down version of Darnielle\'s work to me, over-echoey. Here\'s to hoping it grows on me...',
  'I want to like TMG\'s Goths more than I do. The album puts so little emphasis on lyrics and so much on musicality…',
  'Pepe\'s children are police now',
  'Please help me budget my government is dissolving',
  'Just a little north to pop by and give Fluffy a visit, though I\'d rather head south to the Camp Office',
  'eg Will and Awareness, f\'rinstance, as something to invest a different resource into, on a smaller s…',
  'Possible compromise: stick to a set of (6?) core attributes, but have branched off feat analogue cov…',
  'tbf it\'s a goddess\'s city in hell'
]
var terminals = {};
var startwords = [];
var wordstats = {};

for (var i = 0; i < hardcodedTweetArray.length; i++) {
    var words = hardcodedTweetArray[i].split(' ');
    terminals[words[words.length-1]] = true;
    startwords.push(words[0]);
    for (var j = 0; j < words.length - 1; j++) {
        if (wordstats.hasOwnProperty(words[j])) {
            wordstats[words[j]].push(words[j+1]);
        } else {
            wordstats[words[j]] = [words[j+1]];
        }
    }
}

var choice = function (a) {
    var i = Math.floor(a.length * Math.random());
    return a[i];
};

var make_title = function (min_length) {
    word = choice(startwords);
    var title = [word];
    while (wordstats.hasOwnProperty(word)) {
        var next_words = wordstats[word];
        word = choice(next_words);
        title.push(word);
        if (title.length > min_length && terminals.hasOwnProperty(word)) break;
    }
    if (title.length < min_length) return make_title(min_length);
    return title.join(' ');
};

$('#generate').on('click', function () {
    var title = make_title(3 + Math.floor(3 * Math.random()));
    $('#generated_tweet').html(title);
    // limit to 140 characters?
});