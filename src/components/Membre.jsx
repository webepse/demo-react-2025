import Affichage from "./Affichage";

const Membre = ({nom, age, children, handleChange, hideName, handleClick, plus}) => {
    // const nom = props.nom
    // const children = props.children
    //const {nom, age, children} = props
    return ( 
        <>
            <Affichage 
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} onChange={handleChange}/>
            <button onClick={hideName}>X</button>
            <br />
            <button onClick={handleClick}>Veillir +{plus}</button>
            <p>{ children ? <p>{children}</p> : null}</p>
        </>
     );
}
 
export default Membre;