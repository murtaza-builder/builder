function SubmitButton(props) {
  return <button {...props.attributes} type="submit">
      {props.text}
    </button>;
}

export default SubmitButton;import { registerComponent } from '../functions/register-component';
registerComponent(SubmitButton, {name:'Form:SubmitButton',builtIn:true,image:'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fdf2820ffed1f4349a94c40b3221f5b98',defaultStyles:{appearance:'none',paddingTop:'15px',paddingBottom:'15px',paddingLeft:'25px',paddingRight:'25px',backgroundColor:'#3898EC',color:'white',borderRadius:'4px',cursor:'pointer'},inputs:[{name:'text',type:'text',defaultValue:'Click me'}],static:true,noWrap:true});