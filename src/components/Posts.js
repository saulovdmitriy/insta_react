import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post 
                    src="https://wallbox.ru/wallpapers/main/201451/99ce2806d226f18.jpg"  
                    alt="inst" 
                />
                <Post 
                    src="https://wallbox.ru/resize/1920x1080/wallpapers/main/201531/93f83329b0ac895.jpg"  
                    alt="inst2" 
                />
            </div>
        )
    }
}