import React, { Component } from "react";
import Counter from './Counter'
import '../styles/App.css';

class App extends Component {

    render() {
        var isScrolling;
        window.addEventListener('scroll', function ( event ) {
            // Clear our timeout throughout the scroll
            window.clearTimeout( isScrolling );
            // Set a timeout to run after scrolling ends
            isScrolling = setTimeout(function() {
                // Run the callback
                console.log( 'Scrolling has stopped.' );
            }, 66);
        });
        return (
            <div>
            <h1>My React App!</h1>
            <p>This is a long test</p>
            <Counter />
        </div>
    );
    }
}

export default App;
