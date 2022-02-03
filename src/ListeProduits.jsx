import './ListeProduits.css';
export default function ListeProduits() {
    let a = 5;
    let b = a^4;
    return (
        <section className="ListeProduits">
        <h2>Nos produits</h2>
        <div>
          <article>
              <img src="" alt="" />
              <div className="titre">Titre du Produit</div>
              <div className="prix">13.95</div>
              <button>Ajouter au panier</button>
          </article>
          <article>Produit 2</article>
          <article>Produit 3</article>
          <article>Produit 4</article>
          <article>Produit 5</article>
        </div>
      </section>
    );
}