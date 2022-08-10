import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Game extends React.Component {
  constructor() {
    super();
    this.obterPerguntas = this.obterPerguntas.bind(this);
    this.clickResponse = this.clickResponse.bind(this);
    this.temporizador = this.temporizador.bind(this);
    this.disable = this.disable.bind(this);
    this.state = {
      index: 0,
      categoria: '',
      question: '',
      correct: '',
      buttons: [],
      incorrectStyle: '',
      correctStyle: '',
      disabled: false,
      tempo: 30,
      nextBtnValidate: false,
    };
  }

  componentDidMount() {
    this.obterPerguntas();
    this.temporizador();
  }

  shuffleArray= (buttons) => {
    // refer: https://www.horadecodar.com.br/2021/05/10/como-embaralhar-um-buttonsay-em-javascript-shuffle/
    // Loop em todos os elementos
    for (let i = buttons.length - 1; i > 0; i -= 1) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
    }
    // Retornando buttonsay com aleatoriedade
    this.setState({ buttons });
  }

  clickResponse() {
    // const atribute = [target];
    // const resposta = atribute[0].dataset.testid;
    const correctStyle = ' 3px solid rgb(6, 240, 15)';
    const incorrectStyle = '3px solid red';
    this.setState({
      correctStyle,
      incorrectStyle,
      nextBtnValidate: true,
    });
  }

  async obterPerguntas() {
    const token = localStorage.getItem('token');
    const link = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const tres = 3;

    const perguntas = await fetch(link)
      .then((Response) => Response.json());

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
      buttons: [results[index].correct_answer, ...results[index].incorrect_answers],
    });
    const { buttons } = this.state;
    this.shuffleArray(buttons);
  }

  disable() {
    const { tempo, disabled } = this.state;
    if (tempo === 0) {
      this.setState({ disabled: true });
    }
    if (disabled) {
      clearInterval(this.timerID);
      this.setState({ tempo: 0 });
    }
  }

  temporizador() {
    const segundo = 1000;
    const cinco = 5000;
    setTimeout(() => {
      this.timerID = setInterval(() => {
        this.setState((prev) => ({
          tempo: prev.tempo - 1,
        }), this.disable);
      }, segundo);
    }, cinco);
  }

  render() {
    const { categoria, question, correct, incorrectStyle,
      correctStyle, disabled, tempo, buttons, nextBtnValidate } = this.state;
    return (
      <div>
        <Header />
        <h3 data-testid="question-category">{categoria}</h3>
        <p data-testid="question-text">{question}</p>
        <h3>{tempo}</h3>
        <div
          data-testid="answer-options"
        >

          {buttons.map((botao, index) => (
            <button
              type="button"
              key={ index }
              disabled={ disabled }
              style={ { border: botao === correct
                ? correctStyle
                : incorrectStyle } }
              onClick={ this.clickResponse }
              data-testid={ botao === correct
                ? 'correct-answer'
                : `wrong-answer-${index}` }
            >
              {botao}
            </button>
          ))}
          {
            nextBtnValidate && <button type="button" data-testid="btn-next">Next</button>
          }
        </div>

      </div>
    );
  }
}
Game.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Game;
