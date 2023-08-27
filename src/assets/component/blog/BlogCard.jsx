import React from 'react';
const BlogCard = (props) => {
    const {id, ques, ans} =props.qCard;
    // console.log(props.qCard);
    return (
			<div className='lg:p-10'>
				<div className="rounded-xl p-5 mb-4 bg-error border-2">
					<h1 className="mb-5 text-accent font-bold">
						{id} .{ques}
					</h1>
					<p className="text-gray-900 mb-3">
						<span className="font-bold text-accent">Ans : </span>
						{ans}
					</p>
				</div>
			</div>
		);
};

export default BlogCard;