import { useRef } from "react"

import { Title, Container, TopBackground, Form, ContainerInputs, Input,InputLabel } from "./styles"

import api from "../../services/api"

import UsersImage from '../../assets/users.png'

import { Button } from "../../components/Button/styles"

function Home() {

  const inpuName = useRef()
  const age = useRef()
  const email = useRef()

  async function registrarUsuario() {

    const data = await api.post('/usuarios', {

      email: email.current.value,
      age: parseInt( age.current.value ),
      name: inpuName.current.value

    })

  }

  return (

    <Container>

      <TopBackground>
        <img src={UsersImage} />

      </TopBackground>

      <Form>

        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>

          <div>
            <InputLabel>Nome<span>*</span></InputLabel>
            <Input type='text' placeholder=" Nome Do Usuário" ref={inpuName} />
          </div>
          <div>
            <InputLabel>Idade<span>*</span></InputLabel>
            <Input type='text' placeholder=" Idade Do Usuário" ref={age} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span>*</span></InputLabel>
          <Input type='text' placeholder="Email do usuário" ref={email} />
        </div>
        <Button type='button' onClick={registrarUsuario}>Cadastrar Usuário</Button>

      </Form>

    </Container>

  )
}

export default Home