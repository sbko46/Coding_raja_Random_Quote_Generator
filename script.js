 quotes = {
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."',
    "- Roy T. Bennett": ' "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform." ',
    "- Roy T. Bennett, The Light in the Heart": ' " You cannot control the behavior of others, but you can always choose how you respond to it." ',
    "- Roy T. Bennett, The Light in the Heart": ' "More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate." ',
    "- Albert Einstein": ' "Try not to become a man of success. Rather become a man of value." ',
    "- Herman Melville": '  "It is better to fail in originality than to succeed in imitation." ',
    "- Coco Chanel": '  "Do not spend time beating on a wall, hoping to transform it into a door." ',
    "- Steve Maraboli": ' "Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness." ',
    " ― Abraham Lincoln": ' "I am a success today because I had a friend who believed in me and I did not have the heart to let him down." ',
    "- Mark Twain": ' "All you need in this life is ignorance and confidence; then success is sure." '

}


document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});
