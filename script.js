$(document).ready(function () {
    var degree = 1800;
    var clicks = 0;

    var questions = [
        {
            question: "Who played the character Neo in 'The Matrix' trilogy?",
            choices: ["Keanu Reeves", "Tom Cruise", "Will Smith", "Brad Pitt"],
            correctAnswer: "Keanu Reeves"
        },
        {
            question: "What is the capital of Canada?",
            choices: ["Vancouver", "Toronto", "Montreal", "Ottawa"],
            correctAnswer: "Ottawa"
        },
        {
            question: "What is the capital city of Mongolia?",
            choices: ["Ulaanbaatar", "Astana", "Kathmandu", "Dushanbe"],
            correctAnswer: "Ulaanbaatar"
        },
        {
            question: "How many toes does a cat have?",
            choices: ["16", "18", "20", "22"],
            correctAnswer: "18"
        },
        {
            question: "In which year was the Magna Carta signed?",
            choices: ["1215", "1300", "1150", "1400"],
            correctAnswer: "1215"
        },
        {
            question: "What's the first thing you do when you wake up in the morning?",
            choices: ["Check my phone", "Brush my teeth", "Hit the snooze button", "Coffee"],
            correctAnswer: "Check my phone"
        },
        {
            question: "If you could have any fictional character as a best friend, who would it be?",
            choices: ["Harry Potter", "Sherlock Holmes", "Wonder Woman", "SpongeBob SquarePants"],
            correctAnswer: "Wonder Woman"
        },
        {
            question: "Who played the character Neo in 'The Matrix' trilogy?",
            choices: ["Keanu Reeves", "Tom Cruise", "Will Smith", "Brad Pitt"],
            correctAnswer: "Keanu Reeves"
        },

        {
            question: "Which season do you prefer?",
            choices: ["Spring", "Summer", "Autumn", "Winter"],
            correctAnswer: "Summer"
        },

        {
            question: "If you could visit any country, where would you go?",
            choices: ["Japan", "Italy", "Australia", "Canada"],
            correctAnswer: "Japan"
        },
        {

            question: "Who directed the movie 'Inception'?",
            choices: ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "In which year was the first 'Star Wars' movie released?",
            choices: ["1975", "1977", "1980", "1983"],
            correctAnswer: "1977"
        },
        {
            "question": "Who wrote the science fiction novel 'Dune'?",
            "choices": ["Isaac Asimov", "Philip K. Dick", "Arthur C. Clarke", "Frank Herbert"],
            "correctAnswer": "Frank Herbert"
        },
        {
            "question": "In which book series would you find the character Katniss Everdeen?",
            "choices": ["Divergent", "The Maze Runner", "The Hunger Games", "Harry Potter"],
            "correctAnswer": "The Hunger Games"
        },
        {
            question: "Who played the lead role in the movie 'Inglourious Basterds'?",
            choices: ["Leonardo DiCaprio", "Brad Pitt", "George Clooney", "Tom Hanks"],
            correctAnswer: "Brad Pitt"
        },
        {
            question: "Which science fiction film features a computer system called Skynet?",
            choices: ["The Matrix", "Blade Runner", "Terminator", "Inception"],
            correctAnswer: "Terminator"
        },
        {
            question: "Who directed the movie 'Jurassic Park'?",
            choices: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"],
            correctAnswer: "Steven Spielberg"
        },
        {
            question: "In the film 'The Godfather,' what is the name of the crime family?",
            choices: ["Corleone", "Soprano", "Gambino", "Barzini"],
            correctAnswer: "Corleone"
        }


    ];

    function getRandomQuestion() {
        return questions[Math.floor(Math.random() * questions.length)];
    }

    function updateAnswerButtons(choices) {
        var buttonsHTML = "";
        for (var i = 0; i < choices.length; i++) {
            buttonsHTML += '<button class="answer-button">' + choices[i] + '</button>';
        }
        $('#answer-buttons').html(buttonsHTML);
    }

    var initialQuestionObj = getRandomQuestion();
    document.getElementById("txt").innerHTML = initialQuestionObj.question;
    updateAnswerButtons(initialQuestionObj.choices);

    $('#spin').click(function () {
        clicks++;

        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * 360) + 1;
        var totalDegree = newDegree + extraDegree;

        $('#wheel .sec').each(function (index) {
            var angle = totalDegree + (index * 60);
            $(this).css({
                'transform': 'rotate(' + angle + 'deg)'
            });
        });

        $('#inner-wheel').css({
            'transition': 'transform 6s cubic-bezier(0,.99,.44,.99)',
            'transform': 'rotate(' + totalDegree + 'deg)'
        });

        var spinText = "SPIN";
        if (clicks > 1) {
            spinText = "SPIN AGAIN";
        }

        $('#spin:after').html(spinText);
        $('#spin').addClass('spin');

        setTimeout(function () {
            $('#spin').removeClass('spin');
            $('#answer-buttons button').prop('disabled', false);

            var randomQuestionObj = getRandomQuestion();
            document.getElementById("txt").innerHTML = randomQuestionObj.question;
            document.getElementById("txt2").innerHTML = "";

            updateAnswerButtons(randomQuestionObj.choices);

            $('#answer-buttons').off('click', '.answer-button').on('click', '.answer-button', function () {
                var selectedAnswer = $(this).text();
                var correctAnswer = randomQuestionObj.correctAnswer;

                if (selectedAnswer === correctAnswer) {
                    document.getElementById("txt2").innerHTML = "Correct! You selected: " + selectedAnswer;
                } else {
                    document.getElementById("txt2").innerHTML = "Wrong! The correct answer is: " + correctAnswer;
                }

                $('#answer-buttons button').prop('disabled', true);
            });
        }, 5000);
    });
});