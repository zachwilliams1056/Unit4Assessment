const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const adviceBtn = document.getElementById("adviceButton")

const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

adviceBtn.addEventListener('click', getAdvice)

const questionBtn = document.getElementById("questionButton")

const getQuestion = () => {
    axios.get("http://localhost:4000/api/question/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

questionBtn.addEventListener('click', getQuestion)

const form = document.getElementById("form")

const receiveAnswer = (e) => {
    e.preventDefault()
    const input = document.getElementById('input');
    const body = {
        answer: input.value
    }

    axios.post("http://localhost:4000/api/answer/", body)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

form.addEventListener('submit', receiveAnswer)
