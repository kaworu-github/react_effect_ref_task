import Button from './components/Button/Button';
import {useEffect, useRef, useState } from 'react';
import "./App.css";
import useHandleFocusClick from './components/hooks/useFocus';

export default function App() {		
	let [showLog, setShowLog] = useState(0);
	useEffect(()=>{
		console.log("rendered:", `${showLog}`);
		return()=>{};
	},[showLog]);

	let [changeTitle, setChangeTitle] = useState("0");
	useEffect(()=>{
		document.title = `${changeTitle}`
	},[changeTitle]);	
	
	const inputRefComp = useRef(null);

	let handleClick = () => {
		if(inputRefComp.current){
			inputRefComp.current.focus()
		}
	};

	let textRefChanging = useRef(null);
	let handleChanging = () => {
		console.log(textRefChanging.current)
		console.log(textRefChanging.current.textContent);
		textRefChanging.current.textContent = "text was changing"
	};
	
	let {refCompFocus, handleFocus} = useHandleFocusClick()
	return(
		<div>
			<Button onTouch={()=>setShowLog(++showLog)}>render!</Button>
			<Button onTouch={()=>setChangeTitle(++changeTitle)}>change title!</Button>

			<div>
				<input ref={inputRefComp} type="text" />
				<Button onTouch={handleClick}>focus on Input</Button>
			</div>

			<div>
				<p ref={textRefChanging}>Lorem, ipsum dolor.</p>
				<Button onTouch={handleChanging}>change text</Button>
			</div>

			<div>
				<input ref={refCompFocus} type="text" />
				<Button onTouch={handleFocus}>focus!</Button>
			</div>
		</div>
		);
	
};

// export default App;