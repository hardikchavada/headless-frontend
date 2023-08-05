import axios from "axios";
import { useEffect } from "react";

const WpPosts = () => {
    useEffect(() => {
        axios.get('https://staging.scubeinteriors.com/wp-json/wp/v2/posts')
        .then((res) => {
            console.log(res.data);
        })        
    }, []);

    return ( 
        <>
        <h2>This is a heading 2</h2>
        </>
     );
}
 
export default WpPosts;