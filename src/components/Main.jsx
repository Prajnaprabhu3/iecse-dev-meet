import { useState } from "react";
import { data } from "../data";
import Card from "./Card";
import NotFound from "./NotFound";
import Search from "./Search";

function Main() {
  // console.log(data);
  const [result, setResult] = useState(data);
  // console.log(result) 
const fetchSearch = (e) => {
    let search= e.target.value;
    let items
    if (search) {
        items = result.filter(data => (data.name.toLowerCase().includes(search.toLowerCase())));
        setResult(items);
     }else{
       setResult(data);
     }
    
 }

  console.log(result);

  return (
    <div>
      <Search handleSearch={fetchSearch}/>
      <div className="MainWrapper">
        { result.length>0 ? result.map((card) => (
          <Card
            image={card.img}
            label={card.label ? "Recommended" : ""}
            price={card.price}
            name={card.name}
            description={card.description}
          />
        )):
        <NotFound/>
    }
      </div>
    </div>
  );
}

export default Main;

// {conditon?TrueCase:<FalseCase}
