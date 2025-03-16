import Button from "./component/Button.jsx"
function Form2(){
    return (
        
        <div>
          <h1>HTML FORMS</h1>
          <form>
          <label>Username:<br/>
            <input type="text" name="name" placeholder="Enter your name" />
            </label><br/><br/>
          <label>Password:<br/>
            <input type="password" name="pass" placeholder="Enter your password" />
            </label><br/><br/>
          
            <input type="submit" name="submit" value="submit" />
           
          </form>
          <Button haha="login" />
        </div>
         
    )
}
export default Form2