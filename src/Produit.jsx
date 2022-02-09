import './Produit.scss';
export default function Produit({nom, prix,pid}) {
    return(
        <article className='Produit'>
            <img src={"/images-produits/"+pid+".webp"} alt={nom} />
            <div className="titre">{nom}</div>
            <div className="prix">{prix} $</div>
            <button>Ajouter au panier</button>
        </article>
    )
}