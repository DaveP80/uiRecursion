import './App.css';
import { useState } from 'react';

class Person {
  constructor(username) {
      this.username = username.trim()
  }
  setId(id) {
      this.id = id
  }
}
class Users {
  constructor() {
      this.users = []
  }
  addUsers(person) {
      if (this.users.every(item => item.username!==person.username)) {
          this.users.push(person) 
      } else {
          return person
      }   
  }
}

let wuser = new Users()

function App() {

  const [username, setName] = useState('')
  const [user, setUser] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    let checkinput = username.match(/[\s]{2}|[0-9]/g)
    if (!checkinput) {
      alert(`You entered the name: ${username}`)
    } else {
      return
    }
    let person = new Person(username)
    person.setId(buildArr())
    if (wuser.addUsers(person)==person) {
      alert(`${username} already taken`)
      return;
    }
    const trim = isChecked
    function buildArr(memo=[]) {
      let arr = []
      if (memo.length==3) {
          return memo.join('')
      }
      for (var i = 0; i<9; i++) {
          arr.push(Math.floor(Math.random()*21)) 
      }
      let str = arr.join('')
      if (str.length!==9) {
          memo.push(str.substring(0,3))
      }
      return str.length==9 ? str : buildArr(memo)
  }

  let newarr = (wuser.users[wuser.users.length-1]['id']).split('')
  let arrayOfInts = newarr.map(item => parseInt(item))

  console.log(wuser.users[wuser.users.length-1]);
  
  function newArr (arr, len, flag, memo=[]) {
  
      if (len==0) {
          if (flag) {
              let setarr = []
              memo.forEach(item => {
                if (!setarr.includes(item)) {
                  setarr.push(item)
                }
              })
              return setarr
          } else if (!flag) {
              return memo
          }
      }
  
      let a = arr.reduce((first, max) => {
          return max>first ? max : first
      }, arr[0])
      arr.forEach(item => {
          if (item==a) {
              memo.unshift(item)
          }
      })
      let res = arr.filter((e) => e!==a)
      return newArr(res, len-1, flag, memo)
  }
      setUser(newArr(arrayOfInts, 3, trim).join('') + " " + person.username)

  }
  return (
    <div className="App">
       <br/>
                <form onSubmit={handleSubmit}>
                    <label>username:
                        <input
                            type="text"
                            value={username}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <input type="submit" />
        <label>
        <input
          type="checkbox"
          id="check"
          name="check"
          checked={isChecked}
          onChange={handleOnChange}
        />
        short hint
        </label>
        {
          user && (
            <div>
              <h4>
              {user}
            </h4>
            </div>
          )
        }
        </form>
                <br/>    
    </div>
  );
}

export default App;
