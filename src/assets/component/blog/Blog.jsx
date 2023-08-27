import React, { useEffect, useState } from 'react';
import BlogCard from './blogCard';

const Blog = () => {
	const [blog, setBlog] = useState([]);
	useEffect(() => {
		fetch('blog.json')
		.then((res) => res.json())
		.then((blog) => setBlog(blog));
	}, []);

	return (
		<div className="">
			<h1 className="text-4xl font-bold text-center text-accent lg:mt-5 mt-8 mb-8">Blog</h1>
			{blog.map((qCard) => (
				<BlogCard qCard={qCard} key={qCard.id}></BlogCard>
			))}
		</div>
	);
};

export default Blog;
