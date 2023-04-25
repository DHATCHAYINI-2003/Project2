import './App.css';
import React,{useState,useEffect} from 'react';
const App=()=>{
const[Quote,setQuote]=useState("");
const Getquote=()=>{
	fetch("https://type.fit/api/quotes")
	.then((res)=>res.json())
	.then((data)=>{
		let randomnum = Math.floor(Math.random() * data.length);
		setQuote(data[randomnum]);
	});
}
useEffect(()=>{
	Getquote();
},
[]);
	return(<div>
<div id='txt' className='textbox'>

{Quote.text }<br></br>
{Quote.authors}<br></br>
</div>
<div>
<a id="tweetquote"className="button" href={`https://twitter.com/intent/tweet`} target="_blank">
<img border="0" alt="twitter" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/745/small/twitter-logo-twitter-icon-transparent-free-free-png.png" width="90" height="90"></img>
</a>
<a id="fb"className="button" href={`https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569891%7Cb%7Cfb%20sign%20up%7C&placement=&creative=589460569891&keyword=fb%20sign%20up&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-294779041346%26loc_physical_ms%3D1007810%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwov6hBhBsEiwAvrvN6BL7oZcqSuw4olvLkJEba1Na-HTUfJu5Btpnn8uGD29yA93ryFnH5hoCdUgQAvD_BwE`} target="_blank">
<img border="0" alt="twitter" src=" https://www.kindpng.com/picc/m/678-6785618_facebook-icon-circle-black-vector-clipart-png-download.png" width="50" height="50"></img>
</a>
<button id='btn' onClick={Getquote}>NEW QUOTE</button>
</div></div>
);
}
export default App;