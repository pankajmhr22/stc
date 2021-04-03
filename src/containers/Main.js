import '../App.scss';
import Header from '../components/Header';
import { React, Component } from 'react';
import { Footer } from '../components/Footer';
import { linkedin } from '../utils/ajax';

class Main extends Component {
    constructor(){
        super();
        this.state={
            url:[]
        };
    };
    render() {
        return (
            <div className="App">
                <Header />
                <div className="app-content"> App Content Placeholder</div>
                <Footer />
            </div>
        );
    }

    // componentDidMount(){
    //     console.log("4. ComponentDidMount Call ");       
    //     const promise = linkedin();
    //     promise.then(response=>{
    //         console.log(url);
    //         this.setState({url:response.data});
    //     }).catch(err=>{
    //         console.log('Error is ',err);
    //     });

      
    // }
}

export default Main;