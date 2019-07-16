import React from 'react';

class Article extends React.Component {
    render(){

        const classname = this.props.item.type !== "image" ? "wp-small-article" : "wp-image-article";

        return (
            <article className={`${classname} wp-article`}>
                <a href="">
                    {this.props.item.image && (
                        <img src={this.props.item.image} />
                    )}
                    <div className="wp-article__text">
                        <span className="wp-article__text__tag">{this.props.item.tag}</span>
                        <h2 className="wp-article__text__title">{this.props.item.title}</h2>
                    </div>
                </a>
            </article>
        )
    }
}

export default Article;