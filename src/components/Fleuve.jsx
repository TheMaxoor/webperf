import React from 'react';
import Masonry from 'react-masonry-component';
import Article from './Article';
import Ad from './Ad';

class Fleuve extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element, key){
            if (key > 0 && key % 7 == 0){
                return (
                    <React.Fragment key={key}>
                        <Ad width="small" />
                        <Article key={key} item={element} />
                    </React.Fragment>
                )
            }
           return (
                <Article key={key} item={element} />
            );
        });
    
        return (
            <div className="wp-container_fleuve">
                <Ad width="long" />
                <Masonry className={'wp-fleuve'} disableImagesLoaded={true}>
                    {childElements}
                </Masonry>
            </div>
        );
    }
}

export default Fleuve;