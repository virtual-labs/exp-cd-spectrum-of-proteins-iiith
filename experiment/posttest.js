/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. In proteins the chiral center is present at: ", ///// Write the question inside double quotes
            answers: {
                a: "Nitrogen of amino group.", ///// Write the option 1 inside double quotes
                b: "Carbon of carboxyl group.", ///// Write the option 2 inside double quotes
	        c: "Alpha carbon.", ///// Write the option 1 inside double quotes
                d: "Oxygen in carbonyl group.", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. CD signals in the far UV region(180-250nm) are helpful for secondary structure analysis due to ",  ///// Write the question inside double quotes
      answers: {
        a: "Peptide bond absorption.", ///// Write the option 1 inside double quotes
        b: "Aromatic side chain absorption.", ///// Write the option 2 inside double quotes
        c: "Disulphide bond absorption.",
	d: "None of the above are correct"  
	  
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "3. CD signals in the near UV region(250-320 nm) provide tertiray structural information due to?  ",  ///// Write the question inside double quotes
      answers: {
        a: "Peptide bond absorption.", ///// Write the option 1 inside double quotes
        b: "Aromatic side chain absorption.", ///// Write the option 2 inside double quotes
        c: "Disulphide bond absorption.",
	d: "All of the above are correct"  
	  
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
      question: "4.  Electronic transition taking place at 220nm  ",  ///// Write the question inside double quotes
      answers: {
        a: "n - ¦Ð*.", ///// Write the option 1 inside double quotes
        b: "¦Ð- ¦Ð*.", ///// Write the option 2 inside double quotes
        c: "Both A and B.",
	d: "None of the above are correct"  
	  
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
			 

    {
      question: "5. Electronic transition taking place at 190nm  ",  ///// Write the question inside double quotes
      answers: {
        a: "n - ¦Ð*.", ///// Write the option 1 inside double quotes
        b: "¦Ð- ¦Ð*.", ///// Write the option 2 inside double quotes
        c: "Both A and B.",
	d: "None of the above"  
	  
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
      question: "6. The ¦Ð--> ¦Ð* transition shows negative peak in which of the following secondary structures ",  ///// Write the question inside double quotes
      answers: {
        a: "Alpha helix.", ///// Write the option 1 inside double quotes
        b: "Beta sheet.", ///// Write the option 2 inside double quotes
        c: "Random coil.",
	d: "None of the above."  
	  
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
			 
			 
			 
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
