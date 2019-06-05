import * as math from "../src/server"
import {expect} from 'chai';

describe("Basic Test", ()=>{
    it('should pass the fibonacci seqeuence',()=>{
        expect(math.fib(2)).to.equal(1)
    })  
})