import React from 'react';
import PropTypes from 'prop-types';

class Game extends React.Component {
  constructor() {
    super();
    this.obterPerguntas = this.obterPerguntas.bind(this);
    this.state = {
      index: 0,
      categoria: '',
      question: '',
      correct: '',
      buttons: [],
    };
  }

  componentDidMount() {
    this.obterPerguntas();
  }

  shuffleArray= (arr) => {
    // refer: https://www.horadecodar.com.br/2021/05/10/como-embaralhar-um-array-em-javascript-shuffle/
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i -= 1) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  }

  async obterPerguntas() {
    const token = localStorage.getItem('token');
    const link = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const tres = 3;

    const perguntas = await fetch(link)
      .then((Response) => Response.json());

    console.log(perguntas.results);
    if (Object.values(perguntas)[0] === tres) {
      localStorage.clear();
      const { history } = this.props;
      history.push('/');
    }
    const { index } = this.state;
    const { results } = perguntas;

    this.setState({
      correct: results[index].correct_answer,
      categoria: results[index].category,
      question: results[index].question,
      // incorrect: results[index].incorrect_answers,
      buttons: [results[index].correct_answer, ...results[index].incorrect_answers],
    });
  }

  render() {
    const { categoria, question, correct, buttons } = this.state;
    // const arrRandom = [];
    // buttons.map((a, i) => a[Math.floor(Math.random() * (3 - 0) + 0) === arrRandom[i]]);

    console.log('random  ', this.shuffleArray(buttons));
    const arr = this.shuffleArray(buttons);
    return (
      <div>
        <h3 data-testid="question-category">{categoria}</h3>
        <p data-testid="question-text">{question}</p>

        <div
          data-testid="answer-options"
        >

          {arr.map((botao, index) => (
            <button
              type="button"
              key={ index }
              data-testid={ botao === correct
                ? 'correct-answer'
                : `wrong-answer-${index}` }
            >
              {botao}
            </button>
          ))}
        </div>

      </div>
    );
  }
}
Game.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Game;
