import React, { useState } from 'react'
import Fireworks from './Fireworks.js';
import { FormInputs, Title, ContainerChoose, InputChoose, ButtonConfirm } from './styles.js'
import Lottie from "react-lottie";
import fireworkLottie from "./lotties/fireworks.json"

export default function Choose() {
	const [numberOfFireworks, setNumberOfFireworks] = useState()
	const [editing, setEditing] = useState(true)

	const defaultLottieOptions = {
		loop: true,
		autoplay: true,
		animationData: fireworkLottie,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	const handleClickOnConfirm = (e) => {
		e.preventDefault()

		if(!numberOfFireworks) return

		setEditing(false)
	}
	
	if(!editing) {
		return <Fireworks numberOfFireworks={numberOfFireworks} setEditing={setEditing}/>
	}

	return (
		<ContainerChoose>
			<Title>Gerador de fogos de artíficio</Title>
			<Lottie 
	    	options={defaultLottieOptions}
        height={375}
        width={365}
      />
			<FormInputs onSubmit={handleClickOnConfirm}>
				<InputChoose
					placeholder="Digite a quantidade de fogos de artifício"
					value={numberOfFireworks}
					onChange={e => setNumberOfFireworks(e.target.value)}
				/>
				<ButtonConfirm type="submit">Confirmar</ButtonConfirm>
			</FormInputs>
		</ContainerChoose>
	);
}
