import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser);
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="blue" textAlign="center">
                        <Icon name="comments" color="blue" />
                        Créer votre compte ici
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>

                            <Form.Input fluid name="username" icon="user" iconPosition="left"
                                placeholder="Nom d'utilisateur" onChange={this.handleChange} type="text"
                                value={username} />

                            <Form.Input fluid name="email" icon="mail" iconPosition="left"
                                placeholder="Adresse Email" onChange={this.handleChange} type="email"
                                value={email} />

                            <Form.Input fluid name="password" icon="lock" iconPosition="left"
                                placeholder="Mot de passe" onChange={this.handleChange} type="text"
                                value={password} />

                            <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left"
                                placeholder="Confirmation de mot de passe" onChange={this.handleChange} type="text"
                                value={passwordConfirmation} />

                            <Button color="blue" fluid size="large">S'enregistrer</Button>

                        </Segment>
                        <Message>Vous avez déjà un compte ? <Link to="/login">Se connecter</Link> </Message>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;