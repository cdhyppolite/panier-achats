import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete() {
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
                {/* <a href="#">Panier d'achats</a> */}
                <a href="#">
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCartSharpIcon/>
                    </Badge>
                </a>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}