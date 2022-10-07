import React from 'react'

const BookPage = (props) => {
  console.log(props)
  return (
 <>
 <div className="col flexAIC m1 p1 brd20 lbg">
  <div className="row  flexJCC p1">
    <img src={`https://covers.openlibrary.org/b/olid/${props.data.cover_edition_key}-M.jpg`}  alt="" />
  </div>
  <div className="col flexAIC p3">
    <h2>{props.data.title}</h2>
  <div className="row">  {
      props.data.author_name.map(x=>{
        return <h4>| {x} |</h4>
      })
    }
    </div>
  </div>
 </div>
 </>
  )
}

export default BookPage