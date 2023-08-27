import React from 'react';
import profilePic from '../../../../public/image.png';
const Header = () => {
	return (
		<div>
			<div className="flex justify-between py-8">
				<h1 className="text-4xl font-bold ">Knowledge Cafe</h1>
				<img className="h-[50px] w-[50px]" src={profilePic} alt="" />
			</div>
			<hr />
		</div>
	);
};

export default Header;
