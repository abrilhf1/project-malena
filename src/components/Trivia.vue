<template>

<div class="trivia">
            <div>
                <h1 class=" text-center">
                    Trivia Game
                </h1>
                <p class=" text-center">¿Te animas a jugar con Malena?</p>
                <div class="preguntas">
                    <div v-if="index < count">
                        <p class="preg text-center">
                            {{ questions[index]['question'] }}
                        </p>
                        <label
                            :for="key"
                            class="p-3 mb-2 bg-transparent text-dark d-flex flex-row bd-highlight mb-3 p-3 mb-5 bg-body rounded"
                            v-bind:key="answer.id"
                            v-for="answer,key in questions[index]['answers']"
                            :class="
                            [{'bg-danger.bg-gradient' : selectedAnswer == key}, {'bg-success.bg-gradient' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}] 
                            "
                            >
                            <input
                                type="radio"
                                :id="key"
                                class="hidden"
                                :value="key"
                                @change="answered($event)"
                                v-model="selectedAnswer"
                                :disabled="selectedAnswer != ''"
                            />
                            {{ answer }}
                        </label>
                        <div>
                            <button
                                v-show="selectedAnswer != '' && index < count-1"
                                @click="nextQuestion"
                                :class="'btn'"
                            >
                                Siguiente &gt;
                            </button>
                            <button
                                v-show="selectedAnswer != '' && index == count-1"
                                @click="showResults"
                                :class="'btn'"
                            >
                                Listo!
                            </button>
                        </div>
                    </div>
                    <div v-else  class=" text-center">
                        <h2 class="results">Tus resultados:</h2>
                        <div>
                            <p>
                                Respuesta Correcta:
                                <span :class="'correct'"
                                    >{{ correctAnswer }}</span
                                >
                            </p>
                            <p>
                                Respuesta Incorrecta:
                                <span  :class="'wrong'"
                                    >{{ wrongAnswer }}</span
                                >
                            </p>
                        </div>
                        <div>
                            <button
                                @click="resetQuiz"
                                :class="'btn'"
                            >
                                Jugar de nuevo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>

<script>



export default {
  name: "Mi-Trivia",

  data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 6,
            questions: [
                {
                    question: "¿Qué son los pantalones mom jeans?",
                    answers: {
                      a: 'Unos pantalones rotos y muy desgastados', 
                      b: 'Un pantalón de vestir muy popular en los años 80', 
                      c: 'Unos pantalones de tejido denim, de tiro alto, ajustados a la cintura y que se popularizaron en los años 90',
                      d: 'Unos pantalones de terciopelo'},
                    correctAnswer: 'c'
                },
                {
                    question: "Completa la siguiente pregunta: ¿A qué se le llamó ... de la venganza?",
                    answers: {
                      a: 'Pantalón', 
                      b: 'Tacos',
                      c: 'Remera', 
                      d: 'Vestido'
                    },
                    correctAnswer: 'd'
                },
                {
                    question: "¿Qué es un stiletto?",
                    answers: {
                      a: 'Un bolso de mano', 
                      b: 'Un zapato de tacón alto',
                      c: 'Una prenda de vestir',
                      d: 'Un tipo de bailarina'
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "¿Cuáles de éstas marcas NO es argentina?",
                    answers: {
                      a: 'Ask Denim', 
                      b: 'Zara',
                      c: 'Ay Not Dead',
                      d: '47 Street'
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "Las bucaneras son un calzado que llega hasta más arriba del tobillo, abierto por delante y que se ajusta por medio de correas o cordones",
                    answers: {
                      a: 'Verdadero', 
                      b: 'Falso',
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "¿De donde es la revista Runway?",
                    answers: {
                      a: 'España', 
                      b: 'Italia',
                      c: 'Francia',
                      d: 'Alemania'
                    },
                    correctAnswer: 'c'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
  }


</script>


<style scoped>
  .trivia{
    padding: 150px;
    background-color: #ffc97e;

  }
  .trivia > div > h1{
    font-size: 90px;
    font-family: 'Fredoka One', cursive;
    color: rgb(216 88 58);
  }

  .trivia > div > p{
    font-size: 20px;
    font-family: 'Fredoka One', cursive;
    color: rgb(127, 51, 34);
  }

  .trivia > div > .preguntas{
    padding-top: 10%;
  }

  .trivia > div > .preguntas div{
    display: flex;
      flex-direction: column;
      align-items: center;
  }


  .hidden{
    display: none;
  }

  .preguntas > div > label{
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    box-shadow: 1px -1px 17px -4px rgb(0 0 0 / 22%);
    width: 50%;
  }

  .preguntas > div > .preg {
    font-family: 'Fredoka One', cursive;
    color: rgb(216 88 58);
    font-size: 38px;
  }

  .preguntas > div > div > button.btn{
    background-color: rgb(216 88 58);
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 26px;

  }

  .preguntas > div > .results{
    font-family: 'Fredoka One', cursive;
    color: rgb(216 88 58);
    font-size: 60px;
  }
  .preguntas > div > div > p{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
  }
 
  .preguntas > div > div > p > .wrong{
    font-weight: bold;
    color: rgb(161, 41, 41);
    font-size: 30px;
  }
  .preguntas > div > div{
    margin-top: 60px;
  }

  .preguntas > div > div > p > .correct{
    font-weight: bold;
    color: rgb(67, 148, 42);
    font-size: 30px;
  }

  @media (max-width: 480px){
    .trivia{
      padding: 48px;
    }

    .preguntas > div > label{
      width: 100%;
    }

    .trivia > div > .preguntas{
      padding-top: 40%;
    }

    .trivia > div > h1{
      margin-top: 100px;
    }

    .preguntas > div > .preg{
      font-size: 23px;
    }
  }
</style>