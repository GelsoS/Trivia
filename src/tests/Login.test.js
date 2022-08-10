import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouterAndRedux  from "./helpers/renderWithRouterAndRedux";
import App from '../App'
import Login from '../pages/Login'
import userEvent from "@testing-library/user-event";

describe("Testando a página de Login", () => {
  it("Verifica se a página contem todos os elementos necessários", () => {
    renderWithRouterAndRedux(<Login />);

    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    const playButton = screen.getByTestId('btn-play');
    const settingsButton = screen.getByTestId('btn-settings');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });

  it("Verifica se o email e senha são validos e se é possível clickar no botão", () => {
    renderWithRouterAndRedux(<Login />);

    const nameInput = screen.getByTestId('input-player-name');
    userEvent.type(nameInput, 'usuário1')
    expect(nameInput.value).toBe('usuário1');

    const emailInput = screen.getByTestId('input-gravatar-email');
    userEvent.type(emailInput, 'teste@teste.com');
    expect(emailInput.value).toBe('teste@teste.com');

    const playButton = screen.getByTestId('btn-play');
    userEvent.click(playButton)
    expect(playButton).not.toBeDisabled();  
  });

  it("Verifica se ao clickar no botão Settigns, é redirecionado para a página", () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const settingsButton = screen.getByTestId('btn-settings');
    userEvent.click(settingsButton)

    const{ pathname } = history.location
    expect(pathname).toBe('/settings')
  });

  it("verifica se é feita uma requisição a API quando o botão play é clikado", async () => {
    const token = {
        response_code: 0,
        response_message: "Token Generated Successfully!",
        token: "1df8931e22d6d98d7101a285cfc4df3ec77511ecb6f2f5eafa72d51e996957fc8"
    };

    // global.fetch = jest.fn(() => Promise.resolve({
    //     json: () => Promise.resolve(token),
    // }));

    const returnAPI = Promise.resolve({
      json: () => Promise.resolve(token),
    })

    const mockAPI = jest.spyOn(global, 'fetch').mockImplementation(() => returnAPI);

    const { history } = renderWithRouterAndRedux(<App />)

    const nameInput = screen.getByTestId('input-player-name');
    userEvent.type(nameInput, 'usuário1')
    
    const emailInput = screen.getByTestId('input-gravatar-email');
    userEvent.type(emailInput, 'teste@teste.com');
    
    const playButton = screen.getByTestId('btn-play');
    userEvent.click(playButton)
    
   
    const{ pathname } = history.location
    expect(pathname).toBe('/game')
  
    expect(mockAPI).toHaveBeenCalled();
    expect(mockAPI).toHaveBeenCalledTimes(1);
})
});