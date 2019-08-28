import React, {Component} from 'react'

class PhoneNumber extends Component {
    constructor(){
        super()
        this.state = { 
            phoneNumber: 0,
            showInput: false
        }
    }
    showInputField = () => this.setState({ showInput: true });

    updateContactKeys = e => this.setState({ [e.target.name]: e.target.value });

    deleteUserContact = async() => await this.props.deleteUserContact(this.props.contact._id);

    focusInput = (component) => component ? component.focus() : null;

    changeUserContactNumber = async(e) => {
        if(e.which === 13){
            const p = this.props
            this.setState({ showInput: false })
            return await p.changeUserContactNumber(p.contact._id, p.contact.phoneNumber)
        }
    };

    render() {
        const c = this.props.contact
        return (
            <div>
                <button onClick={this.deleteUserContact}><strong>X</strong></button>
                <span><strong> {c.name}: </strong></span>
                {this.state.showInput ? <input ref={this.focusInput} name="phoneNumber" value={this.state.phoneNumber} onChange={this.updateContactKeys} onKeyPress={this.changeUserContactNumber} type="tel"/> : <span onClick={this.showInputField} >{c.phoneNumber}</span>}
            </div>
        )
    }
}
export default PhoneNumber