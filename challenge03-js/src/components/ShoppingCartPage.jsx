import { useNavigate } from 'react-router-dom';

import { Trash2, ChevronLeft, ChevronRight } from 'react-feather';
import classes from './ShoppingCartPage.module.css';

const ShoppingCartPage = () => {
    const navigate  = useNavigate()
    const handleBack = () => {
        navigate('/home')
    }
    return (
        <div>
            <header className={classes.header}>
                <button onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft/></button>
                <h1 className={classes.title}>Shopping Cart</h1>
                <button className={classes.btnNoStyle}><Trash2/></button>
            </header>
        <div className={classes.pageContainer}>
            <div className={classes.cartContainer}>

            </div>
            <button className={classes.checkoutBtn}>Proceed to Checkout<ChevronRight size={25}/></button>
        </div>
        </div>
    )
};

export default ShoppingCartPage;