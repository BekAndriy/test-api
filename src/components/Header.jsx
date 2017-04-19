import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-Left';

require('./Header.less');

const arrowBack = {
    width: '40px', 
    height: '35px',
}

export class Header extends React.Component {
    
    handleGoBack() {
        window.history.back();
    }

    render(){
        return (
            <div>
              
                    <div>
                        <header>
                            <div className="arrow-back" onClick={this.handleGoBack}>
                                <MuiThemeProvider>
                                    <ArrowLeft 
                                        color='#FFF'
                                        style={arrowBack}
                                     />
                                </MuiThemeProvider>
                            </div>
                            <h1>
                                Header
                            </h1>
                        </header>
                        {this.props.children}
                    </div>
       
            </div>  
        )
    }
}
