/**
 * Created by longstone on 23/06/15.
 */
'use strict';
var should = require('chai').should(),
    stripMobile = require('../stripMobile');


describe('stripMobile', function() {

    it('removes +', function() {
        stripMobile('+411234567890').should.equal('411234567890');
    });

    it('removes leading 0', function(){
        stripMobile('0491234567890').should.equal('491234567890');
    });

    it('removes leading 0s', function(){
        stripMobile('00491234567890').should.equal('491234567890');
    });
    it('removes nothing if number dont have leading 0s', function(){
        stripMobile('491234567890').should.equal('491234567890');
    });


});