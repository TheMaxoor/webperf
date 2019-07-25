import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

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
        const { video, miniature, miniatureWebp, date, tag, text } = this.props.element;
        return (
            <li className="wp-direct__body__collection__item">
                <div>
                    <div className="wp-direct__body__collection__item__video">
                        { !this.state.loadVideo && (
                            <div className="wp-direct__body__collection__item__video__miniature">
                                <picture>
                                    <source type="image/webp" srcSet={'/images/' + miniatureWebp} />
                                    <img src-set={'/images/' + miniature} src={'/images/placeholder.jpg'} width="295px" height="170px" onClick={this.handleClickVideo} />
                                </picture>
                            </div>
                        )}
                        { this.state.loadVideo && (
                            <iframe width="295" height="170" src={video + "?autoplay=1"}  frameBorder="0" allow="encrypted-media; picture-in-picture; autoplay" allowFullScreen></iframe>
                        )}
                    </div>
                    <span className="wp-direct__body__collection__item__date">{date}</span>
                    <span className="wp-direct__body__collection__item__tag">{tag}.</span>
                    <p className="wp-direct__body__collection__item__text" >{text}</p>
                </div>
            </li>
        )
    }
}

export default DirectVideo;