import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import HeroIllustration from '../components/hero/HeroIllustration'

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="BocaWare"
				content="Serietà, velocità, ed esecuzione tecnica perfetta. Tutto i nostri lavori vengono svolti in metodologia Agile e il cliente può sempre avere lo stato d'arte sotto controllo. Benvenuto alla BocaWare."
				illustration={HeroIllustration}
			/>
		</Layout>
	)
}
