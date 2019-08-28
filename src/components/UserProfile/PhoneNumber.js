import React, {Component} from 'react'

class PhoneNumber extends Component {
    constructor(){
        super()
        this.state = { 
            phoneNumber: 0,
            showInput: false
        }
    }
    showInput = () => this.setState({ showInput: true });

    focusInput = component => component ? component.focus() : null;

    updateContactKeys = e => this.setState({ [e.target.name]: e.target.value });

    deleteUserContact = async() => await this.props.deleteUserContact(this.props.contact._id);

    changeUserContactNumber = async(e) => {
        if(e.which === 13){
            this.setState({ showInput: false })
            return await this.props.changeUserContactNumber(this.props.contact._id, this.state.phoneNumber)
        }
    };

    render() {
        const c = this.props.contact
        return (
            <div>
                <button onClick={this.deleteUserContact}><strong>X</strong></button>
                <span><strong> {c.name}: </strong></span>
                {this.state.showInput ? <input ref={this.focusInput} name="phoneNumber" value={this.state.phoneNumber} onChange={this.updateContactKeys} onKeyPress={this.changeUserContactNumber} type="tel"/> : <span onClick={this.showInput} >{c.phoneNumber}</span>}
            </div>
        )
    }
}
export default PhoneNumber