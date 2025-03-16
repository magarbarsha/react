import Button from "./component/Button.jsx"
function Home(props){
    return(
        <div>
           <h1>{props.content}</h1>
           <Button text="logout" />
           <Button text="register" />
        </div>
    )
}
export default Home