import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouterAndRedux  from "./helpers/renderWithRouterAndRedux";
import Feedback from "../pages/Feedback";
import userEvent from "@testing-library/user-event";
import App from "../App";

const initialState = {
    player: {
        name: 'test',
        gravatarEmail: '',
        score: 30,
        assertions: 3,
    }
}


describe("Testando a página de Feedback", () => {
  it("Verifica se a página contem todos os elementos necessários", () => {
    renderWithRouterAndRedux(<Feedback />);

    const feedbackInfo = screen.getByTestId('feedback-text');
    const playerName = screen.getAllByTestId('header-player-name');
    const playerScore = screen.getByTestId('header-score');
    const profilePicture = screen.getByTestId('header-profile-picture');
    const playAgain = screen.getByTestId('btn-play-again')
    const goRanking = screen.getByTestId('btn-ranking')

    expect(feedbackInfo).toBeInTheDocument();
    expect(playerName[0]).toBeInTheDocument();
    expect(playerScore).toBeInTheDocument();
    expect(profilePicture).toBeInTheDocument();
    expect(playAgain).toBeInTheDocument();
    expect(goRanking).toBeInTheDocument();
  });

  it("Verificar a rota para jogar novamente", () => {
    
    const { history } = renderWithRouterAndRedux(<App />, initialState, '/feedback');
    history.push('/feedback'); 
    
    const playAgain = screen.getByTestId('btn-play-again')
    userEvent.click(playAgain)
    
    expect(history.location.pathname).toBe('/')

  })

  it('Verificar a rota para a tela de Ranking', () => {
    const { history } = renderWithRouterAndRedux(<App />, initialState, '/feedback');
    history.push('/feedback');

    const goToRanking = screen.getByTestId('btn-ranking');
    userEvent.click(goToRanking);
    expect(history.location.pathname).toBe('/ranking')
  })

});