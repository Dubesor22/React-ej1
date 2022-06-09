//Crear un componente Person que acepte props name, surname y age, y nos muestre dichos datos dentro de etiquetas span.

const Person = (props) => {
    return (
        <div>
            <span>{props.name} </span>
            <span>{props.surname} </span>
            <span>{props.age} </span>
            <br/>
            
        </div>
    );
}

export default Person