import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    //Displaying all data
    console.log(this.context);
    //Destructuring and holding all specific datas in diff variables
    const { isLightTheme, light, dark } = this.context;
    //Ternary operator to decide light or dark ThemeContext
    const theme = isLightTheme ? light : dark;
    return (
     <div className='book-list' style={{ color: theme.syntax, background: theme.bg}}>
      <ul>
        <li style={{ background: theme.ui }}>Book1</li>
        <li style={{ background: theme.ui }}>Book2</li>
        <li style={{ background: theme.ui }}>Book3</li>
      </ul>
     </div>
    )
  }
}

export default BookList;