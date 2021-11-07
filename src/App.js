import styled, { keyframes } from 'styled-components'

//Styled-Components se crea para hacer mas facil, mas mantenible y más conciso el codigo

//forma de utilizar los backticks en ES6
// para dar a un elemento su CSS incorporado
const P = styled.p` 
  font-size: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`
//asi se hace el hover y la llamada a clases
//si no se pone el ampresand se aplica a los hijos del componente 
const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white
  }

  .info {
    font-size: 28px;
  }
`
//asi se reutiliza el css del boton anterior
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`
const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color:blue;
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color}
`

const Password = styled(Input).attrs({
  type: 'password',
  color: 'red'
})`
  font-size: 20px;
  border: 1px solid red;
`

const girar = keyframes`
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`


//con as="a" hacemos que se comporte como un link


function App() {
  return (
    <Content>
        <P>Esto es un parrafo</P>
        <Button>Enviar<p className="info">Info</p></Button>
        <Button>Enviar</Button>
        <Button primary>Enviar</Button>
        <Button className="secondary">Enviar</Button>
        <BlockButton primary as="a" href="#">Enviar</BlockButton>
        <BlockButton primary>Enviar</BlockButton>
        <Link>Link</Link>
        <StyledLink>Link con estilo</StyledLink>
        <Input color='blue' />
        <Password />
        <br/>
        <Rotar>Estoy girando</Rotar>
    </Content>
  );
}

export default App;
