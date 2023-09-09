import axios from "axios";
import { useEffect, useState } from "react";

const WpPosts = () => {

    //
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get('https://staging.scubeinteriors.com/wp-json/mbp/v1/myposts')
        .then((res) => {
            console.log(res.data);
            setMyData(res.data);
        })        
    }, []);

    return ( 
        <>
            <h2>Axios Test</h2>
            {/* Card Container start */}
            <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                {
                    myData.map((post) => {
                        // eslint-disable-next-line
                        const {id, title, content, featuredImgUrl, excerpt, permalink} = post;
                        // const {id, title, content, featuredImgUrl} = post;
                        return (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={post.id}>
                                <img className="w-full" src={post.featuredImgUrl} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <a href={post.permalink}>
                                        <h1 className="font-bold text-xl mb-2">{post.title}</h1>
                                    </a>
                                    <p className="text-gray-600 text-left" dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                            </div>                     
                        );                                       
                    })
                }
            </div>            
        </>
     );
}
 
export default WpPosts;