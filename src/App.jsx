import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Cards from './assets/component/cards/Cards';
import Header from './assets/component/header/Header';
import SideBar from './assets/component/side-bar/SideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './assets/component/blog/Blog';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App max-w-[1200px] mx-auto px-4 lg:px-0">
			<Header />
			<div>
				<Cards></Cards>
			</div>
			<ToastContainer />
			<Blog/>
		</div>
	);
}

export default App;
