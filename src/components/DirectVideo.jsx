import React from 'react';

class DirectVideo extends React.Component {
    render(){
        const element = this.props.element;
        return (
            <li className="wp-direct__body__collection__item">
                <div>
                    <iframe className="wp-direct__body__collection__item__video" width="295" height="170" src={element.video} frameBorder="0" allow="encrypted-media; picture-in-picture" allowFullScreen></iframe>
                    <span className="wp-direct__body__collection__item__date">{element.date}</span>
                    <span className="wp-direct__body__collection__item__tag">{element.tag}.</span>
                    <p className="wp-direct__body__collection__item__text" >{element.text}</p>
                </div>
            </li>
        )
    }
}

export default DirectVideo;