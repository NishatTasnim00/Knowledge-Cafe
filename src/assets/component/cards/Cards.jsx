import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import SideBar from '../side-bar/SideBar';
import { ToastContainer, toast } from 'react-toastify';


const Cards = () => {
    const [data, setData] = useState([])
    const [mark, setMark] = useState([])
    const [time, setTime] = useState([])

    // console.log(time);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(allData => setData(allData))
    } , [])


    const notify = () => toast("This is already added!");

    const handleBookmark = (title)=>{
        const exist = mark.find(item => item == title) ;
        console.log(exist);
        if(exist){
            notify()
        }
        const newMark = [...mark, title]
            setMark(newMark)
    }
    // console.log(mark.length);
    const readTime = 0;
    const handleReadTime = (t) =>{
        const newTime = [...time, t]
        setTime(newTime)      
    }

    return (
			<div className="lg:flex justify-between gap-5">
				<div className="lg:py-10 pt-10">
					{data.map((singleData) => (
						<Card
							singleData={singleData}
							key={singleData.id}
							handleBookmark={handleBookmark}
							handleReadTime={handleReadTime}
						></Card>
					))}
				</div>
				<SideBar mark={mark} time={time} key={data.id}></SideBar>
			</div>
		);
};

export default Cards;