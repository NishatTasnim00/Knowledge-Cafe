import React from 'react';

const SideBar = (props) => {
	const mark = props.mark;
	const time = props.time;

	let readTime = 0;
	for (const t of time) {
		readTime = readTime + t;
	}
	// console.log(readTime);
	return (
		<div className="w-full lg:w-1/3 ">
			<div className="">
				<div className="h-20 w-full bg-error rounded-lg border-2 border-accent flex items-center justify-center my-10 pt-2 sticky">
					<h1 className="text-accent font-bold text-2xl ">
						Spent time on read : {readTime} min
					</h1>
				</div>
				<div className="w-full bg-error rounded-lg border-black mx-auto p-5">
					<h1 className="font-bold text-2xl ">
						Bookmarked Blogs : {mark.length}
					</h1>
					{mark &&
						mark.map((title) => (
							<div className="bg-white rounded-lg my-10 p-5 font-semibold text-xl">
								{title}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default SideBar;
