import React, { Component } from "react";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <>
        <h1>The header</h1>
      </>
    );
  }
}
export default Header;
