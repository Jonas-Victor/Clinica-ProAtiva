/* eslint-disable no-undef */
import './HeaderCadastro.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/Login/Logo.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function HeaderCadastro() {
    let email = document.querySelector('#email')
    let labelEmail = document.querySelector('#labelEmail')

    let name = document.querySelector('#name')
    let labelName = document.querySelector('#labelName')

    let lastname = document.querySelector('#lastname')
    let labelSobrenome = document.querySelector('#labelSobrenome')

    let CPF = document.querySelector('#CPF')
    let labelCPF = document.querySelector('#labelCPF')

    let DatadeNascimento = document.querySelector('#DatadeNascimento')
    let labelDatadeNascimento = document.querySelector('#labelDatadeNascimento')

    let Telefone = document.querySelector('#Telefone')
    let labelTelefone = document.querySelector('#labelTelefone')

    let Endereco = document.querySelector('#Endereco')
    let labelEndereco = document.querySelector('#labelEndereco')

    let password = document.querySelector('#password')
    let labelSenha = document.querySelector('#labelSenha')

    let passwordconfirmation = document.querySelector('#passwordconfirmation')
    let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')



    const initialState = {
        email: '',
        name: '',
        lastname: '',
        CPF: '',
        DatadeNascimento: '',
        Telefone: '',
        Endereco: '',
        password: '',
        passwordconfirmation: '',
    };


    const [formValues, setFormValues] = useState(initialState);
    const [errors, setErrors] = useState({ ...initialState });

    useEffect(() => {
        // Recupera o estado do componente do localStorage quando a página é carregada
        const savedState = JSON.parse(localStorage.getItem('formState'));
        if (savedState) {
            setFormValues(savedState.formValues);
            setErrors(savedState.errors);
        }
    }, []);

    useEffect(() => {
        // Salva o estado do componente no localStorage sempre que ele é atualizado
        localStorage.setItem('formState', JSON.stringify({ formValues, errors }));
    }, [formValues, errors]);




    function isEmailValid(email) {
        // Expressão regular para validar o formato de e-mail "@gmail.com"
        const emailPattern = /\S+@\S+\.\S+/;

        // Testa o e-mail em relação à expressão regular
        return emailPattern.test(email);
    }


    function onlyletters(name) {

        const onlyletters = /^[A-Za-z]+$/;;

        return onlyletters.test(name)
    }

    function onlynumbers(CPF) {
        const onlynumbers = /^[0-9]+$/;

        return onlynumbers.test(CPF)
    }




    // Função para verificar se um campo tem pelo menos o número mínimo de caracteres
    function hasMinLength(input, minLength) {
        return input.value.length >= minLength;
    }

    // Função para verificar se um campo tem no máximo o número máximo de caracteres
    function hasMaxLength(input, maxLength) {
        return input.value.length <= maxLength;
    }

    // Função para verificar se um campo tem um número mínimo de dígitos numéricos
    function hasMinDigits(input, minDigits) {
        const digitCount = input.value.replace(/[^0-9]/g, '').length;
        return digitCount >= minDigits;
    }

    // Função para verificar se um campo tem um número máximo de dígitos numéricos
    function hasMaxDigits(input, maxDigits) {
        const digitCount = input.value.replace(/[^0-9]/g, '').length;
        return digitCount <= maxDigits;
    }


    // ... código anterior ...

    // Função para verificar se um campo está vazio
    function isFieldEmpty(value) {
        return value.trim() === '';
    }

    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        //codigo para mostrar erro para usuario 
        function showError(inputId, message) {
            const errorElement = document.getElementById(inputId + '-error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }


        if ((!isFieldEmpty(email.value)) && isEmailValid(email.value)) {
            labelEmail.style.color = 'green';
            email.classList.remove('borda-vermelha'); // Remove a borda vermelha
            email.classList.add('borda-verde'); // Adiciona a borda verde
            showError('email', '')
        } else {
            labelEmail.style.color = 'red';
            email.classList.remove('borda-verde'); // Remove a borda verde
            email.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            isValid = false;
            showError('email', 'Email errado');
        }

        if (!isFieldEmpty(name.value) && onlyletters(name.value) && hasMinLength(name, 3)) {
            labelName.style.color = 'green';
            name.classList.remove('borda-vermelha'); // Remove a borda vermelha
            name.classList.add('borda-verde'); // Adiciona a borda verde
            showError('name', '')
        } else {
            labelName.style.color = 'red';
            name.classList.remove('borda-verde'); // Remove a borda verde
            name.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            isValid = false;
            showError('name', 'Nome errado');
        }

        if ((!isFieldEmpty(lastname.value)) && onlyletters(lastname.value) && hasMinLength(lastname, 3)) {
            labelSobrenome.style.color = 'green';
            lastname.classList.remove('borda-vermelha'); // Remove a borda vermelha
            lastname.classList.add('borda-verde'); // Adiciona a borda verde
            showError('lastname', '')

        } else {
            labelSobrenome.style.color = 'red';
            isValid = false;
            lastname.classList.remove('borda-verde'); // Remove a borda verde
            lastname.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            showError('lastname', 'Sobrenome errado');
        }

        if ((!isFieldEmpty(CPF.value)) && onlynumbers(CPF.value) && hasMinLength(CPF, 11)  &&  hasMaxLength(Telefone, 11)) {
            labelCPF.style.color = 'green';
            CPF.classList.remove('borda-vermelha'); // Remove a borda vermelha
            CPF.classList.add('borda-verde'); // Adiciona a borda verde
            showError('CPF', '')

        } else {
            labelCPF.style.color = 'red';
            isValid = false;
            CPF.classList.remove('borda-verde'); // Remove a borda verde
            CPF.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            showError('CPF', 'CPF errado');
        }

        if ((!isFieldEmpty(DatadeNascimento.value))  && hasMinLength(DatadeNascimento, 10) ) {
            labelDatadeNascimento.style.color = 'green';
            DatadeNascimento.classList.remove('borda-vermelha'); // Remove a borda vermelha
            DatadeNascimento.classList.add('borda-verde'); // Adiciona a borda verde
            showError('DatadeNascimento', '')

        } else {
            labelDatadeNascimento.style.color = 'red';
            isValid = false;
            DatadeNascimento.classList.remove('borda-verde'); // Remove a borda verde
            DatadeNascimento.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            showError('DatadeNascimento', 'Data de Nascimento errada');
        }

        if ((!isFieldEmpty(Endereco.value))) {
            labelEndereco.style.color = 'green';
            Endereco.classList.remove('borda-vermelha'); // Remove a borda vermelha
            Endereco.classList.add('borda-verde'); // Adiciona a borda verde
            showError('Endereco', '')

        } else {
            labelEndereco.style.color = 'red';
            isValid = false;
            Endereco.classList.remove('borda-verde'); // Remove a borda verde
            Endereco.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            showError('Endereco', 'Endereço errado');
        }

        if ((!isFieldEmpty(Telefone.value)) && onlynumbers(Telefone.value)&& hasMinLength(Telefone, 9)  &&  hasMaxLength(Telefone, 11)) {
            labelTelefone.style.color = 'green';
            Telefone.classList.remove('borda-vermelha'); // Remove a borda vermelha
            Telefone.classList.add('borda-verde'); // Adiciona a borda verde
            showError('Telefone', '')
        } else {
            labelTelefone.style.color = 'red';
            isValid = false;
            Telefone.classList.remove('borda-verde'); // Remove a borda verde
            Telefone.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            showError('Telefone', 'Telefone errado');
        }

        if ((!isFieldEmpty(password.value))) {
            labelSenha.style.color = 'green';
            password.classList.remove('borda-vermelha'); // Remove a borda vermelha
            password.classList.add('borda-verde'); // Adiciona a borda verde
            showError('password', '')

        } else {
            labelSenha.style.color = 'red';
            isValid = false;
            password.classList.remove('borda-verde'); // Remove a borda verde
            password.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            showError('password', 'Senha incorreta');
        }

        if ((!isFieldEmpty(passwordconfirmation.value))) {
            labelConfirmaSenha.style.color = 'green';
            passwordconfirmation.classList.remove('borda-vermelha'); // Remove a borda vermelha
            passwordconfirmation.classList.add('borda-verde'); // Adiciona a borda verde
            showError('passwordconfirmation', '')
        } else {
            labelConfirmaSenha.style.color = 'red';
            isValid = false;
            passwordconfirmation.classList.remove('borda-verde'); // Remove a borda verde
            passwordconfirmation.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            showError('passwordconfirmation', 'Senhas nao correspondente');
        }

         if (isValid == false) {
       } else {
           window.location.href = '/Login'
        }

        // Continue com as validações para os outros campos

        return isValid;
    }

    // Função chamada ao clicar no botão "Registrar"
  async  function  cadastrar(event) {
        event.preventDefault(); // Evita o envio do formulário padrão
        console.log(password.value)

        
//fiz essa alteraçao do if das senhas serem iguals manda pro not de clara
 if (password.value === passwordconfirmation.value) {
        if (validateForm()) {

           await axios.post('http://localhost:3333/users',{
                    email: email.value,
                    firstName: name.value,
                    lastName: lastname.value,
                    cpf: CPF.value,
                    birthday: DatadeNascimento.value,
                    phone: Telefone.value,
                    address: Endereco.value,
                    password: password.value,
           })
            .then(response => {
              // Faça algo com a resposta do backend
              console.log(response.data);
              alert(response.data)
              alert('chamada valida')
            })
            .catch(error => {
              // Lida com erros, por exemplo, mostrando uma mensagem de erro
            console.error('Erro na chamada do backend:', error);
            alert('chamada invalida')
            });

            // Se o formulário for válido, faça o que for necessário
            alert('Formulário válido. Enviando dados...');

        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        } 
    }                  //fiz essa alteraçao de else para mandar para o not de clara
      else {
            // As senhas não correspondem, mostra mensagem de erro
            labelConfirmaSenha.style.color = 'red';
            passwordconfirmation.classList.remove('borda-verde'); // Remove a borda verde
            passwordconfirmation.classList.add('borda-vermelha'); // Adiciona a borda vermelha
            const passwordConfirmationError = document.getElementById('passwordconfirmation-error');
            passwordConfirmationError.textContent = 'As senhas não correspondem';
            passwordConfirmationError.style.display = 'block';
        }


    }

    // ......................................... código restante .............................................................................

    return (

        <div className='Body-Cadastro'>
            <div id="main-container">

                <img src={Logo} />

                <h1>Cadastre-se para acessar o sistema</h1>
                <form id="register-form" action="">

                    <div class="full-box">
                        <label htmlFor="email" id="labelEmail">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
                        <span class="error-message" id="email-error"></span>
                    </div>

                    <div class="half-box spacing">
                        <label htmlFor="name" id="labelName">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome" min={3} />
                        <span class="error-message" id="name-error"></span>
                    </div>

                    <div class="half-box">
                        <label for="lastname" id="labelSobrenome">Sobrenome</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Digite seu sobrenome" />
                        <span class="error-message" id="lastname-error"></span>
                    </div>

                    <div class="half-box spacing">
                        <label for="CPF" id="labelCPF">CPF</label>
                        <input type="text" name="CPF" id="CPF" placeholder="Digite seu CPF" />
                        <span class="error-message" id="CPF-error"></span>
                    </div>

                    <div class="half-box">
                        <label for="DatadeNascimento" id="labelDatadeNascimento">Data de Nascimento</label>
                        <input type="text" name="DatadeNascimento" id="DatadeNascimento" placeholder="Digite sua Data de Nascimento" />
                        <span class="error-message" id="DatadeNascimento-error"></span>
                    </div>


                    <div class="half-box spacing">
                        <label for="Telefone" id="labelTelefone" >Telefone</label>
                        <input type="text" name="Telefone" id="Telefone" placeholder="Digite seu Telefone" />
                        <span class="error-message" id="Telefone-error"></span>
                    </div>

                    <div class="half-box">
                        <label for="Endereco" id="labelEndereco">Digite seu Endereço</label>
                        <input type="text" name="Endereco" id="Endereco" placeholder="Digite seu Endereço " />
                        <span class="error-message" id="Endereco-error"></span>
                    </div>

                    <div class="half-box spacing">
                        <label for="password" id="labelSenha">Senha</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                        <span class="error-message" id="password-error"></span>
                    </div>


                    <div class="half-box">
                        <label for="passconfirmation" id="labelConfirmaSenha">Confirmação de senha</label>
                        <input type="password" name="passconfirmation" id="passwordconfirmation" placeholder="Digite novamente sua senha" data-equal="password" />
                        <span class="error-message" id="passwordconfirmation-error"></span>
                    </div>

                    <div class="full-box">
                        <input onClick={cadastrar} id="btn-submit" type="submit" value="Registrar" />
                    </div>

                </form>
                <span className='VoltarC'><Link style={{ color: '#278680' }} to='/Login'>&lt;Voltar</Link></span>
            </div>
            <p style={{ color: 'red' }} class="error-validation template"></p>


        </div>




    )
}


export default HeaderCadastro;

