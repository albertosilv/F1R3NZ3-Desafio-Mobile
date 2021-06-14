import React from 'react'
import { Firenze, Description, Container, Header, Section, Input, ButtonCreate,ButtonLogin, Texto } from './Styles'
function Login({navigation}) {
    return (
        <Container>
                <Header>
                    <Firenze>F1R3NZ3</Firenze>
                    <Description>Serviços Tecnológicos</Description>
                </Header>
                <Section>
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" secureTextEntry={true} />
                    <ButtonLogin onPress={() => navigation.navigate('App')}><Texto>Login</Texto></ButtonLogin>
                    <ButtonCreate><Texto>Criar Conta</Texto></ButtonCreate>
                </Section>
        </Container>
    )
}

export default Login