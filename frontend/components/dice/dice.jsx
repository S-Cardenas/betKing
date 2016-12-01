import React from 'react';

class Dice extends React.Component {
  render() {
    return(
      <div className="container-fluid mobile-panel-group">
        <div className="panel panel-default">
          <div className="panel-heading dice-header">
            Dice Jackpot: 234 Bitcoin
          </div>
          <div className="panel-body dice-content">Panel Content</div>
          <div className="panel-footer">Panel Footer</div>
        </div>
      </div>
    );
  }
}

export default Dice;
