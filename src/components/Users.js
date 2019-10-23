import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://look.com.ua/pic/201210/2560x1600/look.com.ua-53457.jpg" 
                alt="man"
                name="Hew"
                // min
            />
            <div className="users__block">
                <User 
                    src="https://look.com.ua/pic/201210/2560x1600/look.com.ua-53457.jpg" 
                    alt="man"
                    name="Hew"
                    min
                />
                <User 
                    src="https://look.com.ua/pic/201210/2560x1600/look.com.ua-53457.jpg" 
                    alt="man"
                    name="Hew"
                    min
                />
                <User 
                    src="https://look.com.ua/pic/201210/2560x1600/look.com.ua-53457.jpg" 
                    alt="man"
                    name="Hew"
                    min
                />
                <User 
                    src="https://look.com.ua/pic/201210/2560x1600/look.com.ua-53457.jpg" 
                    alt="man"
                    name="Hew"
                    min
                />
            </div>
        </div>
    )
}