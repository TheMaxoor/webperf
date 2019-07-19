import React from 'react';

class Ad extends React.Component {
    render() {
        return <div className={`wp-ad wp-ad-${this.props.width}`} />;
    }
}

export default Ad;
