import React from 'react';

class Dice extends React.Component {
  render() {
    return(
      <div className="container-fluid mobile-panel-group">
        <div className="panel panel-default">
          <div className="panel-heading dice-header">
            Dice Jackpot: 234 Bitcoin
          </div>
          <div className="panel-body dice-content">
            <div className='dice-results'>
              99.999
            </div>
            <div className="row">
              <div className="col-xs-4">
                <span className="glyphicon glyphicon glyphicon-volume-up"></span>
              </div>
              <div className="col-xs-4 dice-footer-winnings">
                You win 123B
              </div>
              <div className="col-xs-4 dice-footer-verify">
                Verify
              </div>
            </div>
          </div>
          <div className="panel-footer">Panel Footer</div>
        </div>
      </div>
    );
  }
}

export default Dice;
