import './App.scss';
import Header from './components/Header';
import Main from './containers/Main';
import { React, Component } from 'react';
import { Route, Switch } from 'react-router';
import { Footer } from './components/Footer';

const App = () => {
 
//   if(role=='ADMIN'){
//     jsx  = (<Route path="/adduser" render={()=>{
//         return (<h1>Admin AddUser</h1>)
//     }}/>);
// }
return (
    //  <div className='container'>
    //     <ShareContext.Provider value={{totalItemsInCart: total, updateTotal: updateTotalFn}}>
    //     <Header name = 'Amit' city='Delhi'/>
    //     <Switch>
    //         <Route exact path="/" component={Home}/>
    //         <Route path="/search" component={Search}/>
    //         <Route path="/about/:name/:city" component={About}/>
    //         <Route path="/add" component={AddProduct}/>
    //         <Route render={()=>{
    //             return (<h1>OOPS U TYPE SOMETHING ELSE....</h1>)
    //         }}/>
    //     </Switch>
    //     </ShareContext.Provider>
    // // </div>

    <Main/>
)
}

export default App;
