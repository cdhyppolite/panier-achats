import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';
export default function ListeProduits() {
  // Impérative
  let composantProduits = [];

  // Méthode 1
  // for (let i=0; i < lesProduits.length; i++) {
  //   composantProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id}/>)
  // }

  // Méthode 2
  let notes = [59.566,78.23,85.258,35.9954];
  let notesArondies = notes.map(UneNote => UneNote.toFixed(1)-0);
  // console.log(notesArondies);
    return (
        <section className="ListeProduits">
        <h2>Nos produits</h2>
        <div className='ListesProduits'>
          {/* Méthode 1 */}
          {/* {composantProduits} */}

          {/* Méthode 2 */}
          { lesProduits.map(produit => <Produit key={produit.id} nom={produit.nom} prix={produit.prix} pid={produit.id}/>) }

          {/* <Produit nom={lesProduits[0].nom} prix={lesProduits[0].prix} pid={lesProduits[0].id}/> */}
        </div>
      </section>
    );
}