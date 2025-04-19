import React from 'react';
 import {render,screen} from '@testing-library/react';
 import '@testing-library/jest-dom';
 import Hero from '../landing_page/home/Hero';

 //Test Suite -> all tests at one place

 describe('Hero Component' , ()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText('Hero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png');
    });
 });