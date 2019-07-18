import React from 'react';
import DirectVideo from './DirectVideo'

class Direct extends React.Component {
    render(){
        const childElements = this.props.elements.map(function(element, key){

            if (element.video){
                return (
                    <DirectVideo key={key} element={element} />
                )
            }

           return (
               <li key={key} className="wp-direct__body__collection__item">
                   <a>
                        <span className="wp-direct__body__collection__item__date">{element.date}</span>
                        <span className="wp-direct__body__collection__item__tag">{element.tag}.</span>
                        <p className="wp-direct__body__collection__item__text" >{element.text}</p>
                    </a>
                </li>
            );
        });

        return (
            <section className="wp-direct">
                <div className="wp-direct__body">
                    <div className="wp-direct__body__title">
                        <h2>Le direct</h2>
                    </div>
                    <ul className="wp-direct__body__collection">
                        {childElements}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Direct;