import React from 'react';

class Ad extends React.Component {
    render(){
        return (
            <div className={`wp-ad-${this.props.width}`}>
                
            </div>
        )
    }
}

export default Ad;