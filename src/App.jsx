import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Cointaner from './components/Cointaner'
function App() {

  const redirectadd = useRef();
  const redirecttodo = useRef();
  const input = useRef()
  const id = useRef(0)
  const con = useRef()
  const con1 = useRef()
  const cont = useRef()
  const display = useRef()
  const editer = useRef()

  const [content, setcontent] = useState("")
  // const [id, setid] = useState(0)
  const [triiger, settriiger] = useState(0)
  const [txt, settxt] = useState([])
  const [txt1, settxt1] = useState([])
  const [allfalse, setallfalse] = useState([])
  const [id2, setid2] = useState(0)
  const [editval, seteditval] = useState("")
  // const [display, setdisplay] = useState(false)
  const [editcurr, seteditcurr] = useState("")


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 

      
      
      settxt1(todos)

      
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(txt1))
    let todos = JSON.parse(localStorage.getItem("todos"))

    // console.log(todos)

  }




  const del = (s, t) => {
    let index = txt1.findIndex(item => {
      return item.content == t
    })


    let temp = [...txt1]
    temp[index].deltype = true


    settxt1(temp)
   

  }


  const edit = (s,t) => {
    
    // console.log(editval,editcurr)

    let a = [...txt1]
    console.log(a)
    let index = txt1.findIndex((items)=>{
        return items.content == editcurr
    })

    a[index].content = editval

    settxt1(a)


    editer.current.style.left = "-100vw"
    redirectadd.current.style.webkitFilter  = "blur(0px)"

   
  }
  const editcon = (s,t) => {
    
    redirectadd.current.style.webkitFilter  = "blur(10px)"
    editer.current.style.left = "0"

    seteditval(" ")

    seteditcurr(t)
    


  }
  const subtoggole = (e) => {
    
    seteditval(e.target.value)
    

  }


  const check1 = async(x, e) => {


    // console.log(display.current.checked)




    if (!x) {


      let index = txt1.findIndex(item => {
        return item.content == e;
      })

      let temp = [...txt1]

      if (temp[index].show) {

        temp[index].iscompleted = !x
        if (!display.current.checked) {

          temp[index].show = false
        }

        settxt1(temp)
      }




    }

    




  }

  const completefunc = (e) => {

    console.log(txt1)

    if (e.target.checked) {


      let temp = [...txt1]
      temp.map(item => {

        item.show = true
      })



      settxt1(temp)

    }

    else {
      let temp = [...txt1]
      temp.map(item => {
        if (item.iscompleted == true)
          item.show = false
      })




      settxt1(temp)
    }


   
  }


  const showadd = () => {
    redirectadd.current.style.webkitFilter  = "blur(10px)"
    redirecttodo.current.style.left = "0"
    // {console.log(con.current)}
    input.current.value = " "

  }
  const setin = async (e) => {
    let a = await (e.target.value)
    let b = await settxt(a)

    // console.log(txt)

   


  }

  const gotodo = async (e) => {


    redirecttodo.current.style.left = "-100vw"

    redirectadd.current.style.webkitFilter  = "blur(0px)"
    document.querySelector("body").style.display = "block"
    let a = await (txt)
    if (a == "" || a == " ") {
      alert('Enter a a Todo To submit')
    }
    else {

      await settxt1([...txt1, { content: a, iscompleted: false, show: true, deltype: false }])
      settxt(" ")
      // console.log(txt1)
    }





    // saveToLS()





  }

  return (
    < >

      <div className="bod" ref={redirectadd} >
        <Navbar />
        <div className='main' >
          <div className="head">
            <h1>Todo - List Manager : One App for All Of Your Todos</h1>

          </div>
          <div className='downcon'  >
            Your Todos
          </div>

          <div className="totalcomplete">

            <div className="complete">

              <input onChange={completefunc} ref={display} type="checkbox" />

            </div>
            <div>
              Show Completed
            </div>
          </div>
          <div className="maincon">

            
            {txt1.map((e) => {
            {saveToLS()}
              { id.current = id.current + 1 }
              // let id = idgen()


              return (!e.deltype) && (e.show) && < Cointaner editcon={editcon}  con1={con1} checker={check1} id={id.current} show={e.deltype} key={id.current} txt={e.content} status={e.iscompleted} del={del} />

            })}



          </div>

          <div className="butt">
            <button onClick={showadd}>+ Add Todo</button>
          </div>

        </div>


      </div>


      {/* This is The hidden sec */}
      <div className="addbox" ref={redirecttodo}  >


        <div className="show">

          <h1>
            Add Todo:
          </h1>
          <div className="todoadd">

            <div className='input' >
              <input id='input1' ref={input} onChange={setin} className='in' type="text" />

            </div>

            <div>
              <button className='addtodo' onClick={gotodo}  > Submit </button>

            </div>
          </div>


        </div>
      </div>


      <div  ref={editer} className="addbox show1 "   >


        <div className="show">

          <h1>
            Edit Todo:
          </h1>
          <div className="todoadd">

            <div className='input' >
              <input id='input1' value={editval}  onChange={subtoggole}  className='in' type="text" />

            </div>

            <div>
              <button className='addtodo'  onClick={edit}  > Submit </button>

            </div>
          </div>


        </div>
      </div>







    </>
  )
}

export default App
