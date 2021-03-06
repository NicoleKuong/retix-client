import React, { Component } from "react";
import TicketForm from "./TicketForm";
import { connect } from "react-redux";
import { createTicket } from "../../actions/ticket";
import "./TicketForm.css";

class TicketContainer extends Component {
  state = {
    imageUrl: "",
    price: 0,
    description: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    this.props.dispatch(
      createTicket(
        this.state.imageUrl,
        this.state.price,
        this.state.description,
        this.props.match.params.eventId,
        this.props.history
      )
    );
    this.setState({
      imageUrl: "",
      price: 0,
      description: "",
    });
  };

  render() {
    return (
      <div>
        <TicketForm
          text={"ticketForm"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE IN ticket", state);
  return {
    user: state.user,
    events: state.events,
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(TicketContainer);
