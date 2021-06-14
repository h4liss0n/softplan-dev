import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import App from './App';




test('app starting successfully!', () => {
  render(<App />);
  const linkElement = screen.getByTestId('frm-login');
  expect(linkElement).toBeInTheDocument();
});


test('application login and logout', async () => {
  render(<App />);
  // element
  const email = screen.getByTestId('email') as HTMLInputElement;
  const password = screen.getByTestId('password') as HTMLInputElement;
  const btnLogin = screen.getByTestId('btn-login') as HTMLInputElement;


  fireEvent.change(email, { target: { value: 'halisson@gmail.com' } })
  fireEvent.change(password, { target: { value: '123' } })

  expect(email.value).toBe('halisson@gmail.com')
  expect(password.value).toBe('123')


  //login on 
  fireEvent.click(btnLogin);
  await waitForElementToBeRemoved(screen.getByTestId('frm-login'))


  //logoof
  await waitFor(() => screen.getByTestId('btn-logooff'))

  const btnLogoOff = screen.getByTestId('btn-logooff')
  fireEvent.click(btnLogoOff);

});



 test('it login error', async () => {
   render(<App />);
   const email = screen.getByTestId('email') as HTMLInputElement;
   const password = screen.getByTestId('password') as HTMLInputElement;
   const btnLogin = screen.getByTestId('btn-login') as HTMLInputElement;


   fireEvent.change(email, { target: { value: 'halisson@gmail.com' } })
   fireEvent.change(password, { target: { value: 'erro' } })
   expect(email.value).toBe('halisson@gmail.com')
   expect(password.value).toBe('erro')
   fireEvent.click(btnLogin);
   const alert = await waitFor(() => screen.getByRole('alert'));
  
  
 });

