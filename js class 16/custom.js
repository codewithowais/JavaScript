var questions = [{"category":"Politics","type":"multiple","difficulty":"easy","question":"Whose 2016 presidential campaign slogan was &quot;Make America Great Again&quot;?","correct_answer":"Donald Trump","incorrect_answers":["Ted Cruz","Marco Rubio","Bernie Sanders"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"In the 1984 movie &quot;The Terminator&quot;, what model number is the Terminator portrayed by Arnold Schwarzenegger?","correct_answer":"T-800","incorrect_answers":["I-950","T-888","T-1000"]},{"category":"History","type":"boolean","difficulty":"medium","question":"The two atomic bombs dropped on Japan by the United States in August 1945 were named &#039;Little Man&#039; and &#039;Fat Boy&#039;.","correct_answer":"False","incorrect_answers":["True"]},{"category":"History","type":"multiple","difficulty":"hard","question":"When did Lithuania declare independence from the Soviet Union?","correct_answer":"March 11th, 1990","incorrect_answers":["December 25th, 1991","December 5th, 1991","April 20th, 1989"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"Which Kingdom Hearts game featured the cast of &quot;The World Ends With You&quot;?","correct_answer":"Dream Drop Distance","incorrect_answers":["Birth By Sleep","365\/2 Days","Re:Chain of Memories"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"easy","question":"In &quot;To Love-Ru&quot;, Ren and Run are from what planet?","correct_answer":"Memorze","incorrect_answers":["Deviluke","Mistletoe","Okiwana"]},{"category":"Entertainment: Television","type":"multiple","difficulty":"medium","question":"In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?","correct_answer":"Laura Roslin","incorrect_answers":["William Adama","Tricia Helfer","Harry Stills"]},{"category":"Sports","type":"multiple","difficulty":"medium","question":"Which of the following pitchers was named National League Rookie of the Year for the 2013 season?","correct_answer":"Jose Fernandez","incorrect_answers":["Jacob deGrom","Shelby Miller","Matt Harvey"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which alternative rock band released the critically-acclaimed album &quot;OK Computer&quot;?","correct_answer":"Radiohead","incorrect_answers":["R.E.M.","Nirvana","Coldplay"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"&quot;Hallelujah&quot; is a song written by which Canadian recording artist?","correct_answer":"Leonard Cohen","incorrect_answers":["Kory Lefkowits","Ryan Letourneau ","Justin Bieber "]}]

genrateQuestion()
function genrateQuestion(){

    var questionElement= document.getElementById("question");
    for(i=0;i<questions.length;i++){
        console.log(questions[i]);
        // debugger
        var questionItem= document.createElement("LI");
        var questionItemGet= document.getElementsByTagName("LI");
        var title= document.createElement("H3");
        title.innerHTML=questions[i].question;
        questionItem.appendChild(title)
        questionElement.appendChild(questionItem)
        var optionInCorrect= questions[i].incorrect_answers
        optionInCorrect.push(questions[i].correct_answer)
        
         for(var j=0;j<optionInCorrect.length;j++){
            //  var randamVal= Math.random()
            //  randamVal *= j
            //  randamVal=  Math.ceil(randamVal)
            //  console.log(randamVal)
            var radio = document.createElement("INPUT");
            radio.setAttribute("type","radio");
            radio.setAttribute("name",i);
            radio.value= optionInCorrect[j]
            questionItem.appendChild(radio)
            
             var span= document.createElement("span")
             span.innerHTML=optionInCorrect[j];
             questionItem.appendChild(span)
              
             var braker = document.createElement("BR");
             questionItem.appendChild(braker)
           
        }
        // var
       
       
    }

}
function submtiResult(){
    flag=0
    // debugger;?
    var optionInCorrect = document.getElementsByTagName("li");
    for(var i=0;i<optionInCorrect.length;i++){
        var selectOption= document.getElementsByTagName("input")
       for(var j=0;j<selectOption.length;j++){
            if(selectOption[j].checked){
                console.log(questions[i].correct_answer)
                if((selectOption[j].getAttribute("value"))=== (questions[i].correct_answer)){
                   flag++;
                }
            }
       }
    }
    percentage= flag*100/optionInCorrect.length
    document.getElementById("percentage").innerHTML="you are gained by "+percentage+" % Marks"
}
