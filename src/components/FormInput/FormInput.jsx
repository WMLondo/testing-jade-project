import classes from "./FormInput.module.css"

const FormInput = (props)=> {
    return(
    <div className={classes["input-group"]}>
    <label htmlFor={props.type}>{props.label}</label>
    <input
      type={props.type}
      id={props.type}
      name={props.type}
      value={props.value}
      onChange={props.change}
      required
    />
    {props.children}
  </div>
    )
}

export default FormInput