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
            question: "1.  In biological reactions proteins play a role of a ______________ ? ", ///// Write the question inside double quotes
            answers: {
                a: "Reactant.", ///// Write the option 1 inside double quotes
                b: "Product.", ///// Write the option 2 inside double quotes
		c: "Catalyst.", ///// Write the option 1 inside double quotes
                d: "Does not play any role.", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

	{		  
            question: "2. Protein is a polymer. Monomeric unit of which is amino acid. Each amino acid has a chiral center. So is it possible to apply CD spectrum to study the structure of a protein? ", ///// Write the question inside double quotes
            answers: {
                a: "Yes.", ///// Write the option 1 inside double quotes
                b: "No.", ///// Write the option 2 inside double quotes
		c: "The given information is not enough. Can not conclude.", ///// Write the option 1 inside double quotes
                d: "CD spectroscopy may be used for some protein not all.", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
			 },
	   
			  
    {
      question: "Having known the primary structure of a protein the main interest of biologists is to know the secondary structure of a protein. How a spectroscopic method can help it?",  ///// Write the question inside double quotes
      answers: {
        a: "Response only for a particular secondary structure, for others structures remain silent.", ///// Write the option 1 inside double quotes
        b: "Give signature spectra for each different secondary structure.", ///// Write the option 2 inside double quotes
        c: "Spectroscoppic methods can not help.",
	d: "can not say."
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
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
