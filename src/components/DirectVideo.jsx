import React from 'react';

class DirectVideo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loadVideo: false
        }
        this.handleClickVideo = this.handleClickVideo.bind(this);
    }

    handleClickVideo(){
        this.setState({
            loadVideo: true
        })
    }

    render(){
        const element = this.props.element;
        return (
            <li className="wp-direct__body__collection__item">
                <div>
                    <div className="wp-direct__body__collection__item__video">
                        <iframe width="295" height="170" src={element.video} frameBorder="0" allow="encrypted-media; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <span className="wp-direct__body__collection__item__date">{element.date}</span>
                    <span className="wp-direct__body__collection__item__tag">{element.tag}.</span>
                    <p className="wp-direct__body__collection__item__text" >{element.text}</p>
                </div>
            </li>
        )
    }
}

export default DirectVideo;