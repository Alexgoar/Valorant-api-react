import React from 'react';

export default class SearchBar extends React.Component {
        constructor() {
          super();
      
          this.state = {
            inputValue: '',
            value: ''
          };
          
          this.onInputChange = this.onInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        onInputChange(e) {
          const { value } = e.target;
      
          this.setState({
            inputValue: value
          });
        }

        handleSubmit(event) {
            const myArray = this.state.inputValue.split("#");
            if(!this.state.inputValue.includes('#')){
                alert('# Manquant. Merci de compléter le pseudo');
            }
            else{
                window.location.href = "historique?pseudo=" + myArray[0] + "&tag=" + myArray[1];
            }    
            event.preventDefault();
    
        }
      
        render() {
          const { inputValue } = this.state;
          
          return (
            <div className='input-wrapper'>
              <form onSubmit={this.handleSubmit}>
                <input type="text"
                    onChange={this.onInputChange}
                    placeholder='Search...'
                    value={inputValue}
                    spellCheck={false}
                    />
                <span className='input-highlight'>
                    { inputValue.replace(/ /g, "\u00a0") }
                </span>
              </form>
            </div>
          );
        }
      }
      