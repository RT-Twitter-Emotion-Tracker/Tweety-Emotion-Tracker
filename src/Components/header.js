import React from 'react';
import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h2 className="text-5xl font-medium font-serif text-purple-600 p-16">Positivity Tracker</h2>
                <hr/>
                <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">10</h2>
                        <p className="leading-relaxed">Total Tweets</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">39</h2>
                        <p className="leading-relaxed">Total Hashtags</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">35</h2>
                        <p className="leading-relaxed">Positive Tags</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">4</h2>
                        <p className="leading-relaxed">Negative Tags</p>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Header
