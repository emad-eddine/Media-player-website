


function FormRow({type,name,label,placeholder,defaultValue}) {
  return (
    <div>
<label htmlFor={name}>{label}</label>
            <input
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              required
            />

    </div>
  )
}
export default FormRow