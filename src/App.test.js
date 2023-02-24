
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should render App component without crashing', () => {
    shallow(<App />);
  });

  it('should generate a password with the correct length', () => {
    const wrapper = shallow(<App />);
    const passwordLengthInput = wrapper.find('#length');
    passwordLengthInput.simulate('change', { target: { value: 12 } });
    const generateButton = wrapper.find('button');
    generateButton.simulate('click');
    const generatedPassword = wrapper.find('p').text();
    expect(generatedPassword.length).toBe(12);
  });

  it('should include uppercase letters in generated password', () => {
    const wrapper = shallow(<App />);
    const uppercaseLettersCheckbox = wrapper.find('#uppercaseLetters');
    uppercaseLettersCheckbox.simulate('change', { target: { checked: true } });
    const generateButton = wrapper.find('button');
    generateButton.simulate('click');
    const generatedPassword = wrapper.find('p').text();
    const uppercaseLettersIncluded = /[A-Z]/.test(generatedPassword);
    expect(uppercaseLettersIncluded).toBe(true);
  });

  it('should include lowercase letters in generated password', () => {
    const wrapper = shallow(<App />);
    const lowercaseLettersCheckbox = wrapper.find('#lowercaseLetters');
    lowercaseLettersCheckbox.simulate('change', { target: { checked: true } });
    const generateButton = wrapper.find('button');
    generateButton.simulate('click');
    const generatedPassword = wrapper.find('p').text();
    const lowercaseLettersIncluded = /[a-z]/.test(generatedPassword);
    expect(lowercaseLettersIncluded).toBe(true);
  });

  it('should include numbers in generated password', () => {
    const wrapper = shallow(<App />);
    const numbersCheckbox = wrapper.find('#numbers');
    numbersCheckbox.simulate('change', { target: { checked: true } });
    const generateButton = wrapper.find('button');
    generateButton.simulate('click');
    const generatedPassword = wrapper.find('p').text();
    const numbersIncluded = /[0-9]/.test(generatedPassword);
    expect(numbersIncluded).toBe(true);
  });

  it('should include special characters in generated password', () => {
    const wrapper = shallow(<App />);
    const specialCharactersCheckbox = wrapper.find('#specialCharacters');
    specialCharactersCheckbox.simulate('change', { target: { checked: true } });
    const generateButton = wrapper.find('button');
    generateButton.simulate('click');
    const generatedPassword = wrapper.find('p').text();
    const specialCharactersIncluded = /[$&+,:;=?@#|'<>.^*()%!-]/.test(generatedPassword);
    expect(specialCharactersIncluded).toBe(true);
  });
});
