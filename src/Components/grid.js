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
                {/*<div class="lg:w-1/3 sm:w-1/2 p-4> */}
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-400 p-16">
                    <div className="text-white font-semibold opacity-100 hover:opacity-0">Hovered</div>
                    <p className="text-white font-semibold opacity-0 hover:opacity-100">33</p>
                </div>
                {/*<div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">Dwayne</div>*/}
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-600 text-white font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-600 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-800 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-indigo-500 text-white  font-semibold p-16" >Hovered</div>
                {/*<div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>*/}
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-purple-800 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-600 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-900 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-gray-400 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-purple-500 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-800 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-indigo-500 text-white  font-semibold p-16" >Hovered</div>
                {/*<div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>*/}
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-400 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-yellow-600 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-400 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-pink-900 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-gray-400 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-purple-500 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-green-800 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/3 p-4">
                <div class="flex relative">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-red-400 text-white  font-semibold p-16" >Hovered</div>
                </div>
            </div>
            </div>
        </div>
        </section>
        )
    }
}

export default Grid;