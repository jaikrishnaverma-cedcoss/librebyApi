import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import BookPage from './BookPage';
import Task2 from './Task2';
const Task1 = () => {
  const refinput = useRef()
  const [state, setState] = useState({
    items: [],
    DataisLoaded: false,
    currentBook: 0
  });
  useEffect(() => {
    let rl = 'https://openlibrary.org/search.json?q=fantastic+mr+fox&mode=ebooks&has_fulltext=true';
    fetch(rl)
      .then((res) => res.json())
      .then((json) => {
        setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
    , [])
  const fetchData = (e) => {
    e.preventDefault()  
    // https://openlibrary.org/search.json?q=Alphakids&mode=ebooks&has_fulltext=true
    let rl = 'https://openlibrary.org/search.json?q='+e.target.city.value+'&mode=ebooks&has_fulltext=true';
    fetch(rl)
      .then((res) => res.json())
      .then((json) => {
        setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  const BookPages=(data)=>
  {
    let urls='https://openlibrary.org/api/books?bibkeys=ISBN:'+data.isbn[0]+'&jscmd=details&format=json';
    fetch(urls)
    .then((res)=>res.json())
    .then((json)=>{
      let x='ISBN:'+data.isbn[0];
      window.location.href=json[x].info_url
      console.log(json[x])
    })
// setState({...state,currentBook:data})
  }
  console.log(state.currentBook)
  const { DataisLoaded, items } = state;
  if (!DataisLoaded) return <div>
    <h1 className='lfont'> Pleses wait some time.... </h1> </div>;
if(state.currentBook!==-1&&state.currentBook!==undefined) return <BookPage data={state.currentBook.isbn[0]}/>;


  return (
    <>
      <div className="col brd20 dbg p1 full main1 flexSB flexAIC cloudy">
        <form className="row main1Upper w99 flexAIC flexSB dfont ccl">
          <button style={{ background: "transparent", color: "white" }}><i class="fa fa-bars" aria-hidden="true"></i></button>
          <p className='city'>Book Store<span className="state">/By Jai</span><span className="country">/@Google</span></p>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </form>
   
        <div className="row main1Foot full flexJCC ">
          <form className="searchbox w40 brd10 lbg row flexAIC flexSB" onSubmit={fetchData}>
            <input className='brd10 w90' placeholder='Enter Book Name...' name="city" style={{ paddingLeft: "3%" }} type="text" />
            <button className='m3' type='submit'><i class="fa fa-search dfont " aria-hidden="true"></i></button>
          </form>
        </div>

      </div>
<Task2 docs={items.docs} BookPages={BookPages}/>
    </>
  )
}

export default Task1