import React from 'react';
require('./Footer.less');

const CURRENT_YEAR = (new Date).getFullYear();

export class Footer extends React.Component {

    render(){

        return (
            <footer>
                <div className="copyright">
            		<span>© {CURRENT_YEAR} Auction. All Rights Reserved </span>
            	</div>
            </footer>  
        )
    }
}
