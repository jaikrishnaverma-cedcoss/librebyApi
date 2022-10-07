

const Task2 = (props) => {


  const Devider = (arr, n = 4) => {
    let data = [];
    let len = parseInt(arr.length / n);
    let iter = 0;
    for (let row = 0; row < len; row++) {
      let temp=[]
      for (let col = 0; col < n; col++) {
        temp.push(arr[iter])
        iter++;
      }
      data.push(temp)
    }
    iter--;
    let temp=[]
    len = parseInt(arr.length % n);
    for (let col = 0; col < len; col++) {
      temp.push(arr[iter])
      iter++
    }
    data.push(temp)
    return data;
  }
  let books=Devider(props.docs,4);

    
  console.log("b",books)
  return (
    <>
      <div className="row full flexSA footbox" style={{ marginTop: "50px" }}>
        <div className="col full flexAIC" style={{background:"none"}}>
          {
           books.map((x, index) => {
            return <div className="row full flexJCC">{x.map(keys=>{
              return <div className="col flexAIC lbg w20 card" onClick={()=>props.BookPages(keys)} style={{padding:"0px"}}><img className="bookImg" src={`https://covers.openlibrary.org/b/olid/${keys.cover_edition_key}-M.jpg`} alt="" />
              <div className="col  flexAIC" style={{borderRadius:"5px",width:"95%"}}>
                <p style={{textAlign:"center",color:"white",fontWeight:"500"}}>{keys.title}</p></div></div>
            })}</div> 
            
              
            })
          }
        </div>


      </div>
    </>
  );
}

export default Task2