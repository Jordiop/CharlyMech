import Rive from '@rive-app/react-canvas';
import style from './RivePhone.module.css'

function RivePhone() {
	return (
		<>
			<Rive className={style.Rive}
				src="../../../assets/rive/iphone_home_animation.riv" //! Solve these routes
				stateMachines="state_machine"
			/>
		</>
	);
}

export default RivePhone