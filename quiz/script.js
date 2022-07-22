var quizdata=[
    {
        question : 'which framework is related to JS',
        a: '.net',
        b:'laravel',
        c:'react',
        d:'django',
        correct:'c' 
    },
    {
        question : 'which is not a programming langugae',
        a: 'HTMl',
        b:'javscript',
        c:'python',
        d:'java',
        correct:'a' 
    },
    {
        question : 'which is not a framework',
        a: 'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct:'b' 
    },
    {
        question :'css stands for',
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading sheeet of style',
        d:'django',
        correct:'b' 
    },
    

]
 var quiz= document.getElementById('quizdiv')

 var answer = document.querySelectorAll('.answer')

 var question = document.getElementById('question')

 var option_a =  document.getElementById('a_value')

var option_b =  document.getElementById('b_value')

var option_c =  document.getElementById('c_value')

var option_d =  document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion=0
var quizScore=0

loadQuiz()

function loadQuiz()
{
    deselect()
    question.innerHTML= quizdata[currentQuestion].question
    option_a.innerText= quizdata[currentQuestion].a
    option_b.innerText= quizdata[currentQuestion].b
    option_c.innerText= quizdata[currentQuestion].c
    option_d.innerText= quizdata[currentQuestion].d
}
function deselect(){
    answer.forEach(answer =>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if (answer.checked)
        {
            selectedoption = answer.id
        }
    })
    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1
    }
    currentQuestion=currentQuestion+1
    if(currentQuestion==quizdata.length){
     document.getElementById('quizdiv').innerHTML=`<h2>you have answer ${quizScore} correctly out of ${quizdata.length}</h2>`
    }
    else{
        loadQuiz()
    }
})




    