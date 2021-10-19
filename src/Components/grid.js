import React from 'react';
import { Component } from 'react';
import Time from './time';

class Grid extends Component {
    render() {
        return (
        <section class="text-gray-600 body-font bg-gray-900 mt-10 pb-10">
        <div class="container pl-10 pr-14 py-10 mx-auto">
        <Time />
            <div class="grid grid-cols-3 -m-8 md:grid-cols-4 lg:grid-cols-6">
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-600 text-white font-semibold p-16" >#Happy</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-600 text-white  font-semibold p-16" >#Sad</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-800 text-white  font-semibold p-16" >#Bored</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-indigo-500 text-white  font-semibold p-16" >#Awesome</div>
                {/*<div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>*/}
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-purple-800 text-white  font-semibold p-16" >#Delighted</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-600 text-white  font-semibold p-16" >#Depressed</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-900 text-white  font-semibold p-16" >#Jealous</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-gray-400 text-white  font-semibold p-16" >#Upset</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-purple-500 text-white  font-semibold p-16" >#Proud</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-800 text-white  font-semibold p-16" >#Liked</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 text-white  font-semibold p-16" >#Sweet</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-indigo-500 text-white  font-semibold p-16" >#Relaxed</div>
                {/*<div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>*/}
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-400 text-white  font-semibold p-16" >#Angry</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-600 text-white  font-semibold p-16" >#Frustrated</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-400 text-white  font-semibold p-16" >#Lonely</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-900 text-white  font-semibold p-16" >#Sexy</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-gray-400 text-white  font-semibold p-16" >#Hurt</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-purple-500 text-white  font-semibold p-16" >#Blessed</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-800 text-white  font-semibold p-16" >#Confused</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 text-white  font-semibold p-16" >#Excited</div>
                </div>
            </div>
            </div>
        </div>
        </section>
        )
    }
}

export default Grid;
