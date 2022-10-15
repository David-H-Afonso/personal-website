import Header from './components/Header/container/Header'
import Home from './components/Home/container/Home'

const App = () => {
	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Hanuman:wght@100;300;400;700;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
			</style>
			<Header />
			<Home /> ;
		</>
	)
}

export default App
