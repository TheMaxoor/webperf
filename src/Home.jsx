import React from 'react';
import Swiper from './components/Swiper.jsx';
import Fleuve from './components/Fleuve';
import Direct from './components/Direct';

const fleuveContent = [
    {tag:"Le fil vert", title: "Climat : «Prendre le train doit devenir un acte citoyen»", image: "https://medias.liberation.fr/photo/1234325-sncf.jpg?modified_at=1562658485&width=960"},
    {tag:"Chronique «aux petits soins»", title: "VIH : un rapport contre le ronronnement ambiant", image: "https://medias.liberation.fr/photo/1235972--.jpg?modified_at=1563203253&ratio_x=03&ratio_y=02"},
    {type:"image", tag:"Festivals", title: "Ron Carter, le son en image", image: "https://medias.liberation.fr/photo/1235976-ron_carter_with-bass_marc_gilgen_swjpg.jpg?modified_at=1563214043&width=975"},
    {tag:"Checknews", title: "De jeunes youtubeurs ont-ils été payés pour faire l'éloge du SNU ?"},
    {tag:"Screenshot", title: "«Tu enfanteras dans la douleur», auscultation des violences obstétricales"},
    {tag:"Tribune", title: "Carola Rackeete et Greta Thunberg, deux femmes puissantes", image: "https://medias.liberation.fr/photo/1232163-carola-rackete-the-31-year-old-sea-watch-3-captain-is-seen-onboard-the-ship-as-it-docks-in-lampedusa.jpg?modified_at=1563270539&width=960"},
    {tag:"Analyse", title: "Sponsors : sur le Tour, les vélos roulent au fiol", image: "https://medias.liberation.fr/photo/1236047-000_1ic3ox-1jpg.jpg?modified_at=1563215921&ratio_x=03&ratio_y=02&width=750"},
    {tag:"Enquête", title: "Jeux vidéo : l'avatar, mon alter ego" },
    {tag: "Checknews", title: 'A quel titre Franky Zapata était-il autorisé à porter une arme sur les champs le 14 juillet ?'},
    {tag: "Récit", title: 'Huawei, une success story à la chinoise', image: "https://medias.liberation.fr/photo/1236054-000_1ir2ci.jpg?modified_at=1563215143"},
    {type:"image", tag:"Ete 2019", title: "Hélène : de longue date", image: "https://medias.liberation.fr/photo/1235978-helene-rolles-et-patrick-puydebat-sur-le-tournage-de-la-serie-televisee-helene-et-les-garcons-.jpg?modified_at=1563211762&width=975"},
    {type: "image", tag: "Gouvernement", title: "Le ministre de la transition écologique, François de Rugy, a démissionné", image: "https://medias.liberation.fr/photo/1236193-prodlibe-2019-0629-reunion-publique-lrem-a-bobino.jpg?modified_at=1563284133"},
    {tag: "Live", title: "En direct - Démission de Rugy: «L'autre victime de cette situation c'est l'écologie»"},
]


const liveContent = [
    {date: "14:12", tag: "Epidémie", text: "RDC : premier mort du virus Ebola à Goma"},
    {date: '13:49', tag: 'Iran', text: "L'arrestation en Iran de la chercheuse franco-iranienne Fariba Adelkhah, directrice de recherche à la Fondation nationale des sciences politiques (FNSP) au Centre de recherches internationales (CERI) est «inadmissible et révoltante», a réagi Sciences Po mardi. «Nous sommes (...) en contact étroit et régulier avec la cellule de crise du ministère de l'Europe et des Affaires étrangères», précisent les présidents de la FNSP et de Sciences Po, Olivier Duhamel et Frédéric Mion, dans un message diffusé au sein de l'Institut. L'Autorité judiciaire iranienne a confirmé mardi l'arrestation de l'universitaire, annoncée la veille par Paris."},
    {date: "13:32", tag: "Coup de filet", text: "Corse : quatre arrestations dont l'ex-chef du FLNC Charles Pieri pour abus de biens sociaux"},
    {date: "12:43", tag: "Social", text: "Tati : fermeture de 13 magasins annoncée, 189 postes supprimés"},
    {date: "12:18", tag: "Chez Pol", text: "Summer of love : la gauche veut profiter de l'été pour s'unir à Paris"},
    {date: "11:59", tag: "Fin du numerus clausus", text: "Le Parlement adopte définitivement le projet de loi santé"},
    {date: "11:34", tag: "Revues", text: "Cet été, le Monde dédie une série d'articles aux grandes revues scientifiques. Premier épisode : Nature, une publication centrale vieille de 150 ans, autant détestée que convoitée par les chercheurs pour y publier. Sur ce, je vous laisse avec Margaux Lacroux et vous dis à bientôt !"},
    {date: "11:20", tag: "Attaque en diffamation", text: "«Mediapart n'a fait que son travail et continuera de le faire»"},
    {date: "", tag: "", text: "", video: ""},
    {date: "", tag: "", text: "", video: ""},
]

class Home extends React.Component {
    render() {
        return (
            <div className="wp-homepage">
                    <Fleuve elements={fleuveContent}/>
                    <Direct elements={liveContent} />
            </div>
        );
    }
}

export default Home;
