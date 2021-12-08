

function Post({ id, title }) {

	return <div>{id} {title} </div>
}

export async function getStaticPaths() {

	return {
		paths: [{
	
			params: { id: '1' }
		}], fallback: true
	}

}

export async function getStaticProps({ params }) {
	if(params.id == 1) {
		return {
			props: {
				id: 1,
				title: 'my content 1' 
			}
		} 
	} else {
		return { 
			props: {
				id: 2,
				title: 'my content 2' 
			}
		} 
	}
}

export default Post;
