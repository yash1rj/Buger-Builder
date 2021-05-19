import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            tokenId: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store token upon login', () => {
        expect(reducer({
            tokenId: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            tokenId: 'my-token',
            userId: 'my-id'
        })).toEqual({
            tokenId: 'my-token',
            userId: 'my-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});