import React from 'react'
import ghostImage from '../../dannyghost.png';
import gameEx from '../../gameExample2.png';
import {ruCommonRules, engCommonRules, Elements} from './RulesDesc'

class Rules extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            language: 'ru'
        }

        this.ChangeLanguage = this.ChangeLanguage.bind(this)
    }

    ChangeLanguage(){
        this.state.language ==='eng'? 
            this.setState({
                language:'ru'
            }):
            this.setState({
                language:'eng'
            })
    }

    render(){
        return(
            <React.Fragment>
            <div className = 'rules-container'>
                <div className='rules-list'>  
                    
                    <button className='lang-btn' onClick={this.ChangeLanguage}>{this.state.language === 'ru' ? 'en' : 'ru'}</button>

                    {(this.state.language === 'ru' ? ruCommonRules : engCommonRules).map(m => {
                        return <div><a href='#'>{m}</a></div>
                    })}

                </div>
                <div className='example-img'>
                    <img src = {gameEx}></img>
                </div>
                
            </div>
            </React.Fragment>)

    }
}

export default Rules