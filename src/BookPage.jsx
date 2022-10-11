// import React, { useEffect, useState } from 'react'

// const BookPage = (props) => {
//   const [state,setState]=useState({items:"",DataisLoaded:false})



//   useEffect(() => {
//     let urls='https://openlibrary.org/api/books?bibkeys=ISBN:'+props.data+'&jscmd=details&format=json';
//     fetch(urls)
//       .then((res) => res.json())
//       .then((json) => {
//         setState({
//           items: json,
//           DataisLoaded: true
//         });
//       })
//   }
//     , [])

//   const fetchData=()=>{
//     let urls='https://openlibrary.org/api/books?bibkeys=ISBN:'+props.data+'&jscmd=details&format=json';
//     fetch(urls)
//     .then((res)=>res.json())
//     .then((json)=>{
//       setState({
//         items: json,
//         DataisLoaded: true
//       });
//     })
//   }
// let x='ISBN:'+props.data;
//   console.log(state.items[x])
//   return (
//  <>
//  {/* <div className="col flexAIC m1 p1 brd20 lbg">
//   <div className="row  flexJCC p1">
//     <img src={`https://covers.openlibrary.org/b/olid/${props.data.cover_edition_key}-M.jpg`}  alt="" />
//   </div>
//   <div className="col flexAIC p3">
//     <h2>{props.data.title}</h2>
//   <div className="row">  {
//       props.data.author_name.map(x=>{
//         return <h4>| {x} |</h4>
//       })
//     }
//     </div>
//   </div>
//  </div> */}
//  </>
//   )
// }

// export default BookPage