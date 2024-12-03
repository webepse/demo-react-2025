const Membre = ({nom, age, children}) => {
    // const nom = props.nom
    // const children = props.children
    //const {nom, age, children} = props
    return ( 
        <>
            <h2 style={{backgroundColor: age < 35 ?'dodgerblue':'crimson', color:'white'}}>Membre : {nom} age: {age}</h2>
            <p>{ children ? <p>{children}</p> : null}</p>
        </>
     );
}
 
export default Membre;