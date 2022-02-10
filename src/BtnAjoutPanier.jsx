import './BtnAjoutPanier.scss';
import Badge from '@mui/material/Badge';
// import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
export default function BtnAjoutPanier() {
    return (
        <Badge badgeContent={4} color="primary">
            <button className='BtnAjouterPanier'>Ajouter au panier</button>
        </Badge>
        // <AddShoppingCartSharpIcon/>
    );
}