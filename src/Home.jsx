import React from 'react';
import Fleuve from './components/Fleuve';
import Direct from './components/Direct';
import fleuveContent from './content/fleuveContent';
import liveContent from './content/liveContent';

class Home extends React.Component {
    render() {
        return (
            <div className="wp-homepage">
                    <Fleuve elements={fleuveContent} />
                    <Direct elements={liveContent} />
            </div>
        );
    }
}

export default Home;
