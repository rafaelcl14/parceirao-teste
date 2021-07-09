import axios from 'axios'
import React, { FormEvent, useState } from 'react'

import toast, { Toaster } from 'react-hot-toast'
import { Container } from './styles'
import { Containers } from './stylesMediaQuerie'

import logop from '../../assets/parceiraologo.png'
import logoinsta from '../../assets/insta.svg'
import logoface from '../../assets/facebook.svg'
import logolocal from '../../assets/location_on.svg'
import logotele from '../../assets/phone_in_talk.svg'
import imgchegando from '../../assets/chegando.png'

const Home: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  async function handleSubmit(evento: FormEvent) {
    evento.preventDefault()

    if (!checkbox) {
      toast.error('Para continuar, aceite os termos de privacidade!', {
        id: email,
        style: {
          width: 'auto'
        }
      })
    }

    if (
      userName !== '' &&
      telefone !== '' &&
      email !== '' &&
      cpf !== '' &&
      rua !== '' &&
      numero !== '' &&
      bairro !== '' &&
      cidade !== '' &&
      checkbox
    ) {
      await axios
        .post('/api/mail', {
          userName,
          telefone,
          email,
          cpf,
          rua,
          numero,
          bairro,
          cidade
        })
        .then(() => {
          setUserName('')
          setTelefone('')
          setEmail('')
          setCpf('')
          setRua('')
          setNumero('')
          setBairro('')
          setCidade('')

          toast.success('Formulário enviado com sucesso!', {
            id: email,
            style: {
              width: 'auto'
            }
          })
        })
        .catch(() => {
          'deu erro'
        })
    }
  }

  return (
    <Container>
      <Containers>
        <aside>
          <strong className="subtitulo-embreve">
            <p className="Titulo--top">EM BREVE EM JI-PARANÁ</p>
          </strong>
          <h1 className="logoParceirao">
            <img src={logop} alt="logo parceirão atacadista" />
          </h1>
          <div className="imagemobile">
            <img
              className="imgchegandomobile"
              src={imgchegando}
              alt="Imagem Parceirão"
            />
          </div>
          <div className="conteudo">
            <strong className="subtitulo">
              <img className="logosredes" src={logolocal} alt="" />
              <a className="maps" href="https://goo.gl/maps/3kgCxnUSnjDNdA2c6">
                Endereço: R. Cruzeiro do Sul, 2278 - Cafezinho, Ji-Paraná - RO,
                <br />
                76913-684
              </a>
            </strong>

            <p className="endereco">
              <img className="logosredes" src={logotele} alt="" />
              <a className="tel maps" href="tel:693424-7174" type="tel">
                Telefone: (69) 3424-7174
              </a>
            </p>
            <div className="redessociais ">
              <a
                className="logo--social"
                href="https://www.facebook.com/parceiraoatacadista"
              >
                <img className="icon--logo" src={logoface} alt="" />
              </a>
              <a
                className="logo--social"
                href="https://www.instagram.com/parceiraoatacadista/"
              >
                <img className="icon--logo" src={logoinsta} alt="" />
              </a>
              <p className="maps">@parceiraoatacadista</p>
            </div>
          </div>
        </aside>

        <main>
          <div className="main-content">
            <img className="logoOI" src={imgchegando} alt="Imagem Parceirão" />
          </div>
        </main>
      </Containers>
    </Container>
  )
}

export default Home
