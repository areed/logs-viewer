import * as React from "react";
import * as autoBind from "react-autobind";
import * as PropTypes from 'prop-types';
import Modal from "react-modal";

export default class AccessTokensModal extends React.Component {
  
  constructor() {
    super();
    autoBind(this);
  }

  render() {
    return (
      <div>
          <h1>Access Tokens</h1>
          <div className="modal-content">
              <h3>Create a new token</h3>
              <p>Create a new API token for your team to access and stream your audit logs.</p>
              <div className="name-input">
                <input type="text" placeholder="Release 1.0.0" onChange={(e) => { this.setState({ newSavedExportName: e.target.value }) }}  />
                <button className="Button primary" onClick={() => { this.handleExportCSV(searchQuery, newSavedExportName) }}></button>
              </div>
          </div>
      </div>
    );
  }
}

