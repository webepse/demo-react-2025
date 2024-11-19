const Membre = ({nom, age, children}) => {
    // const nom = props.nom
    // const children = props.children
    //const {nom, age, children} = props
    return ( 
        <>
            <h2>Membre : {nom} age: {age}</h2>
            <p>{ children ? <p>{children}</p> : null}</p>
        </>
     );
}
 
export default Membre;