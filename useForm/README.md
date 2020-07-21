# useForm

Ejemplo de uso:
```JS
const initialForm = {
  name: '',
  age: 0,
  email: ''
}
const [ formValues, handleInputChange, rest ] = useForm( initialForm )

```