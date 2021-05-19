import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BurgerBuilder } from './BurgerBuilder';
import buildcontrols from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()}); //connection with enzyme

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {paneer: 0}});
        expect(wrapper.find(buildcontrols)).toHaveLength(1);
    });
});