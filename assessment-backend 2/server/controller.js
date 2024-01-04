module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A good friend is a blessing.", "Don't just think, act!", "Resting well is as important as working hard.", "Say hello to others. You will have a happier day.", "The architect of your destiny is yourself.", "The first man gets the pearl, the second man gets the shell."];
      
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getQuestion: (req, res) => {
        const questions = ["Did you wake up happy today?", "Are you grateful for the people around you?", "Have you said thank you today?", "What is one good thing that happened to you today?"];
      
        
        let randomIndex = Math.floor(Math.random() * questions.length);
        let randomQuestion = questions[randomIndex];
      
        res.status(200).send(randomQuestion);
    },


    getAdvice: (req, res) =>  {
        const advice = ["Advice, when most needed, is least heeded", "An inch of time is an inch of gold.", "A truly rich life contains love and art in abundance.", "Don’t let your limitations overshadow your talents."];
      
        
        let randomIndex = Math.floor(Math.random() * advice.length);
        let randomAdvice = advice[randomIndex];
      
        res.status(200).send(randomAdvice);
    },

    receiveAnswer: (req, res) => {
        const { answer } = req.body
        if (answer)
        answers.push(answer)
        return;
        res.status(200).send(answer)
    }

}

let answers = [];