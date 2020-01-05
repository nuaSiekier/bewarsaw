import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
    state = { name: '', email: '', phone: '', message: '' }

    formChanged = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    formSubmitted = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { name, email, phone, message } = this.state;

        fetch('https://www.bewarsaw.com/', {
            method: 'post',
            body: JSON.stringify({ name:name, email:email, phone:phone, message:message }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((result) => {
                //blaladdfsadasdas
            })
    }

    render() {
        return (
            <div class='form-style-5'>
                <form onSubmit={this.formSubmitted} method='POST' action='mail.php'>
                    <h3>Contact us!</h3>
                    <fieldset>
                        <input name='name' type='text' placeholder='Enter your name' value={this.state.name} onChange={this.formChanged} />
                        <input name='email' type='email' placeholder='Enter your e-mail adress' value={this.state.email} onChange={this.formChanged} />
                        <input name='phone' type='phone' placeholder='Enter your phone number' value={this.state.phone} onChange={this.formChanged} />
                        <textarea name='message' placeholder='Enter your request' value={this.state.message} onChange={this.formChanged} />
                        <button type='submit'>Submit</button>
                    </fieldset>
                </form>

            </div>
        )
    }
}
export default Contact