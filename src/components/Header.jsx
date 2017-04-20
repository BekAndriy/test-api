import React from 'react';
import { Footer } from './Footer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-Left';
import ArrowTop from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

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
                            {
                                location.hash.indexOf('albums') > -1 ? '' :
                                <div className="arrow-back" onClick={this.handleGoBack}>
                                    <MuiThemeProvider>
                                        <ArrowLeft 
                                            color='#FFF'
                                            style={arrowBack}
                                        />
                                    </MuiThemeProvider>
                                </div> 
                            }
                            
                            <h1>
                                Header
                            </h1>
                        </header>
                        {this.props.children}

                        <div className="scroll-top">
                            <MuiThemeProvider>
                                <ArrowTop
                                    color='rgba(0,0,0,0.4)'
                                    style={arrowBack}
                                    />
                            </MuiThemeProvider>
                        </div>

                        <Footer />
                    </div>
       
            </div>  
        )
    }
}
