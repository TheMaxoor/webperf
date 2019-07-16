import React from 'react';
import modelSwiper from '../model'

class Swiper extends React.Component {
    render() {

         const cards = modelSwiper.map(panel => (
            <article className="swiper__card">
                <div>
                    <h2>{panel.name}</h2>
                    <p>Durée : 3 min</p>
                </div>
                <img src="https://static.lexpress.fr/medias_12105/w_907,h_1362,c_crop,x_457,y_0/w_450,h_658,c_fill,g_north/v1563165521/des-supporters-de-l-algerie-autour-de-l-arc-de-triomphe-a-paris-le-11-juillet-2019_6197942.jpg" />
            </article>
        ));

        return (
            <div className="swiper">
               {cards}
            </div>
        );
    }
}

export default Swiper;
