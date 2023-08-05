import axios from "axios";
import { useEffect, useState } from "react";

const WpPosts = () => {

    //
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get('https://staging.scubeinteriors.com/wp-json/wp/v2/posts')
        .then((res) => {
            console.log(res.data);
            setMyData(res.data);
        })        
    }, []);

    return ( 
        <>
            <h2>Axios Test</h2>            
            {
                myData.map((post) => {
                    const {id, title, content} = post;
                    return (
                        <div className="card1" key={id}>
                            <h1>{title.rendered}</h1>
                            <p>{content.rendered}</p>
                        </div> 
                    );                                       
                })
            }
        </>
     );
}
 
export default WpPosts;