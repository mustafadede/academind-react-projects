import {Fragment} from "react";
import dinnerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactDinner</h1>
           <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={dinnerImage} alt="A table full of delicious food"/>
        </div>
    </Fragment>
}

export default Header