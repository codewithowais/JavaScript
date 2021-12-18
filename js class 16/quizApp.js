var questions = [{ "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "On which computer hardware device is the BIOS chip located?", "correct_answer": "Motherboard", "incorrect_answers": ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "Nvidia&#039;s headquarters are based in which Silicon Valley city?", "correct_answer": "Santa Clara", "incorrect_answers": ["Palo Alto", "Cupertino", "Mountain View"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "Generally, which component of a computer draws the most power?", "correct_answer": "Video Card", "incorrect_answers": ["Hard Drive", "Processor", "Power Supply"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "Which one of these is not an official development name for a Ubuntu release?", "correct_answer": "Mystic Mansion", "incorrect_answers": ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?", "correct_answer": "print(&quot;Hello World&quot;)", "incorrect_answers": ["console.log(&quot;Hello World&quot;)", "echo &quot;Hello World&quot;", "printf(&quot;Hello World&quot;)"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?", "correct_answer": "center", "incorrect_answers": ["static", "absolute", "relative"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": ".rs is the top-level domain for what country?", "correct_answer": "Serbia", "incorrect_answers": ["Romania", "Russia", "Rwanda"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "When did the online streaming service &quot;Mixer&quot; launch?", "correct_answer": "2016", "incorrect_answers": ["2013", "2009", "2011"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "In programming, what do you call functions with the same name but different implementations?", "correct_answer": "Overloading", "incorrect_answers": ["Overriding", "Abstracting", "Inheriting"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "medium", "question": "The teapot often seen in many 3D modeling applications is called what?", "correct_answer": "Utah Teapot", "incorrect_answers": ["Pixar Teapot", "3D Teapot", "Tennessee Teapot"] }]

generatequiz();
function generatequiz() {
    var questionElement = document.getElementById('question')
    for (i = 0; i < questions.length; i++) {
        var questionItem = document.createElement('LI')
        var title = document.createElement('H3')
        title.innerHTML = questions[i].question
        questionItem.appendChild(title)
        questionElement.appendChild(questionItem)
        var option = questions[i].incorrect_answers
        option.push(questions[i].correct_answer)
        for (var j = 0; j < option.length; j++) {
            var radio = document.createElement('INPUT')
            radio.setAttribute('type', 'radio')
            radio.setAttribute('name', i)
            radio.setAttribute('value', option[j])
            //  radio.value=option[j]
            questionItem.appendChild(radio)

            var valueItem = document.createElement('SPAN')
            valueItem.innerHTML = option[j]
            questionItem.appendChild(valueItem)

            var breaker = document.createElement('BR')
            questionItem.appendChild(breaker)

        }
        questionElement.appendChild(questionItem)

    }
}

function result() {
    var count = 0;
    for (k = 0; k < questions.length; k++) {
        var option = document.getElementsByName(k)
        for (j = 0; j < option.length; j++) {
            if (option[j].checked) {
                if (option[j].value == questions[k].correct_answer) {
                    count++
                }


            }
        }
    }
    var res = (count / questions.length) * 100
    var resultTxt = document.getElementById('resultTxt')
    var percentTxt = document.createElement('H2')
    percentTxt.innerHTML = ("you got " + res + " % in your quiz")
    resultTxt.appendChild(percentTxt)
}