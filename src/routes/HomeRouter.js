import UserTable from '../view/UserTable' ; 
import Profile from '../view/Profile' ; 

let HomeRouter = [
    {path : "/", component : UserTable}, 
    {path : "/profile", component : Profile}
] ; 

export default HomeRouter ; 