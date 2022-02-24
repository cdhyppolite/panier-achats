import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';
import { accordionActionsClasses, alertTitleClasses } from '@mui/material';

export default function Entete({panier}) {
    // Obtenir les 5 info impportantes pour le sommaire panier (on passe le tableau 
    // (Array) des valeurs dans l'objet 'panier')
    const {articlesDifferents, articlesTotaux, sousTotal, taxes, total} = calculerInfoPanier(Object.values(panier));
return (
<header className="Entete">
    <h1>Magasin général</h1>
    <nav>
        <input type="checkbox" id="cc-sommaire-panier" />
        <div className="sommaire-panier">
            <h3>Sommaire du Panier</h3>
            <div> <span>Articles différents</span>{articlesDifferents}</div>
            <div> <span>Articles totaux</span>{articlesTotaux}</div>
            <div> <span>Sous-total</span>{sousTotal}</div>
            <div> <span>Taxes</span>{taxes}</div>
            <div> <span>Total</span>{total}</div>
        </div>
        {/* ------------------- */}
        {/* <Badge badgeContent={Object.values(panier.panier).reduce((acc,article)=> acc+article.qte, 0)} color="secondary"> */}
        <Badge badgeContent={articlesTotaux} color="secondary">
            <label htmlFor="cc-sommaire-panier">
                <ShoppingCartSharpIcon /></label>
        </Badge>
        <a href="#">Contactez-nous</a>
    </nav>
</header>
);
}
/**
 * Calculer l'information du sommaire du panier
 * 
 * @param Array panierAchats Objet panier d'achats
 * 
 * @returns Object Objet contenant les 5 info requises du panier
 */

 function calculerInfoPanier(panierAchats) {
    const _sousTotal = panierAchats.reduce((acc, courant) => acc + courant.qte * courant.prix, 0);
    const _taxes = _sousTotal * 0.14975;
    return {
        articlesDifferents: panierAchats.length,
        articlesTotaux: panierAchats.reduce((acc, courant) => acc + courant.qte, 0),
        sousTotal: _sousTotal.toFixed(2),
        taxes: _taxes.toFixed(2),
        total: (_sousTotal + _taxes).toFixed(2)
    }
}