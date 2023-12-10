const reverse = require("./index")

test("reverse to be a function",()=>{
    expect(typeof reverse).toEqual('function');
})

test("reverse to be a function",()=>{
    expect(reverse("test")).toEqual('tset');
})