import React from 'react';


class Article extends React.Component {
    render(){

        const classname = this.props.item.type !== "image" ? "wp-small-article" : "wp-image-article";
        const {photoContent, image, imageSmall, imageSmallWebp, tag, title} = this.props.item;

        return (
            <article className={`${classname} wp-article`}>
                <a href="">
                    {photoContent && (
                        <picture>
                            <img className="lazyload" data-src={'/images/' + image} src={'/images/placeholder.jpg'} alt="alt" />
                        </picture>
                    )}
                    <div className="wp-article__text">
                        <span className="wp-article__text__tag">{tag}</span>
                        <h2 className="wp-article__text__title">{title}</h2>
                    </div>
                </a>
            </article>
        );
    }
}

export default Article;
