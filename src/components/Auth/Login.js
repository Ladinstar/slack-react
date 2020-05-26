import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    state = {}

    handleChange = () => {}

    render(){
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as="h2" icon color="blue" textAlign="center">
                        <Icon name="comments" color="blue" />
                        Se connecter
                    </Header>
                    <Form size="large">
                        <Segment stacked>

                            <Form.Input fluid name="username" icon="user" iconPosition="left"
                                placeholder="Nom d'utilisateur ou email" onChange={this.handleChange} type="text" />

                            <Form.Input fluid name="password" icon="lock" iconPosition="left"
                                placeholder="Mot de passe" onChange={this.handleChange} type="text" />

                            <Button color="blue" fluid size="large">Se connecter</Button>

                        </Segment>
                        <Message>Vous n'avez pas de compte ? <Link to="/register">Créer son compte</Link> </Message>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login;