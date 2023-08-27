import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const Card = (props) => {
	// console.log(props.singleData);
	const {
		id,
		cover,
		title,
		author,
		author_img,
		published,
		duration,
		level,
		topic,
	} = props.singleData;

	const formattedDate = new Date(published).toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric',
	});
	const publishedDate = new Date(published);
	const current = new Date();
	const days = publishedDate.getDate() - current.getDate();
	// console.log(days);

	return (
		<div className="w-full lg:w-[800px] lg:h-[800px] border-red-800">
			<img className="h-[450px] w-full rounded-lg" src={cover} alt="" />
			<div className="py-8">
				<div className="lg:flex justify-between">
					<div className="flex gap-4">
						<img
							className="h-[50px] w-[50px] rounded-full"
							src={author_img}
							alt=""
						/>
						<div>
							<h2 className="font-bold text-2xl">{author}</h2>
							<h6>
								{formattedDate} ({days} days ago)
							</h6>
						</div>
					</div>
					<div className="flex lg:gap-2 justify-end gap-44">
						<h6>{duration} min read</h6>
						<FontAwesomeIcon
							className="h-6"
							onClick={() => props.handleBookmark(title)}
							icon={faBookmark}
						/>
					</div>
				</div>
				<h1 className="font-bold text-4xl pt-3">{title}</h1>
				<div className="flex gap-3 py-7">
					<h6>#{level}</h6>
					<h6>#{topic}</h6>
				</div>

				<button
					className="underline underline-accent text-accent"
					onClick={() => props.handleReadTime(duration)}
				>
					Mark as read
				</button>
				<hr className="mt-5" />
			</div>
		</div>
	);
};

export default Card;
