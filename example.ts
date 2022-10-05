import { areEquals, deepEquals } from "./src/deep-equals";
import { doesMatch } from "./src/does-match";

doesMatch({name: "Dupont"}, {name:"Dupont", age: 5})//return true
doesMatch({name: "Martin"}, {name:"Dupont", age: 5})//return false
doesMatch({age: 5}, {name:"Dupont", age: 5})//return true
doesMatch({age: 1}, {name:"Dupont", age: 5})//return false
doesMatch({age: "Dupont"}, {name:"Dupont", age: 5})//return false
doesMatch({name: 5}, {name:"Dupont", age: 5})//return false
doesMatch({}, {name:"Dupont", age: 5})//return true
doesMatch({name:"Dupont", age: 5}, {})//return false
doesMatch({height:176}, {name:"Dupont", age: 5})//return false
doesMatch({"":undefined}, {})//return false

deepEquals({name: "Dupont"}, {name:"Dupont"}) //return true
deepEquals({name: "Dupont"}, {name:"Dupont", age: 5}) //return false
deepEquals({name: "Dupont"}, {name:"Martin"}) //return false
deepEquals({}, {name:"Martin"}) //return false
deepEquals({}, {}) //return true

areEquals("Dupont","Dupont") //return true
areEquals("Dupont", true) //return false
areEquals("Dupont","Martin") //return false
areEquals(5, 5) //return true
areEquals(5, 1) //return false
areEquals(5, "5") //return false
areEquals(false, 0) //return false
areEquals(false, "") //return false


doesMatch({name: "Dupont"}, {name:"Dupont", age: 5})
  areEquals({name: "Dupont"}, {name:"Dupont"})
    deepEquals({name: "Dupont"}, {name:"Dupont"})//return true

doesMatch({name: "Dupont", age:5}, {name:"Dupont", age: 5, height:176})
  areEquals({name: "Dupont"}, {name:"Dupont"})
    deepEquals({name: "Dupont"}, {name:"Dupont"})//return true
  areEquals({age: 5}, {age:5})
    deepEquals({age: 5}, {age:5})//return true

doesMatch({name: "Dupont", age:5}, {name:"Martin", age: 15, height:176})
  areEquals({name: "Dupont"}, {name:"Martin"})
    deepEquals({name: "Dupont"}, {name:"Martin"})//return false
  areEquals({name: "Dupont"}, {name:"Martin"})
    deepEquals({age: 5}, {age: 15})//return false
