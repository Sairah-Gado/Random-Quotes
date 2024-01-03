const randomQuotesArr = [
    `“Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.”
    – Ashley Smith`,
    `“You are never too old to set another goal or to dream a new dream.”
    – C.S. Lewis`,
    `“What is not started today is never finished tomorrow.”
    – Johann Wolfgang von Goethe`,
    `“Do not follow where the path may lead. Go instead where there is no path and leave a trail.”
    – Ralph Waldo Emerson`,
    `“Start where you are. Use what you have. Do what you can.”
    – Arthur Ashe`,
    `“Dream as if you'll live forever, live as if you'll die today.”
    – James Dean`,
    `“Like success, failure is many things to many people. With positive mental attitude, failure is a learning experience, a rung on the ladder, and a plateau at which to get your thoughts in order to prepare to try again.”
    – W. Clement Stone`,
    `“No matter where you're from, your dreams are valid.”
    – Lupita Nyong'o`,
    `“There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other.”
    – Douglas H. Everett`,
    `“Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.”
    – Mae Jemison`,
    `“A dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.”
    – Oscar Wilde`,
    `“Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.”
    – Samuel Beckett`,
    `“A man is not old until regrets take the place of dreams.”
    – John Barrymore`,
    `“Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.”
    – Mark Twain`,
    `“The only thing that will stop you from fulfilling your dreams is you.”
    – Tom Bradley`,
    `“Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.”
    – Epicurus`,
    `“Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.”
    – Harriet Tubman`,
    `“The future belongs to those who believe in the beauty of their dreams.”
    – Eleanor Roosevelt`,
    `“The only thing worse than starting something and failing … is not starting something.”
    – Seth Godin`,
    `“You don’t have to see the whole staircase, just take the first step.”
    – Martin Luther King, Jr.`


]
const button = document.querySelector('.btn');
const h1 = document.querySelector('.quotes')
button.addEventListener('click', () => {
    const rand = Math.floor(Math.random() * randomQuotesArr.length);
    const para = randomQuotesArr[rand];
    h1.innerText = para
})