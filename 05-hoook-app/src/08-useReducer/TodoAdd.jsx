import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    if ( description.length <= 1) return;
    
    const NewTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    //verificar que la onNewodo exista
    onNewTodo(NewTodo);
    onResetForm();
    
  }

  return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text" 
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            name="description"
            value={ description }
            onChange={ onInputChange }
        />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
  )
}
